const path = require("path");
const fs = require("fs");
const AdminBro = require("admin-bro");

/** @type {AdminBro.After<AdminBro.ActionResponse>} */
const after = async (response, request, context) => {
  const { record, photo } = context;

  if (record.isValid() && photo) {
    const filePath = path.join("uploads", record.id().toString(), photo.name);
    await fs.promises.mkdir(path.dirname(filePath), { recursive: true });

    await fs.promises.rename(photo.path, filePath);

    await record.update({ photo: filePath });
  }
  return response;
};

/** @type {AdminBro.Before} */
const before = async (request, context) => {
  if (request.method === "post") {
    const { photo, ...otherParams } = request.payload;

    // eslint-disable-next-line no-param-reassign
    context.photo = photo;

    return {
      ...request,
      payload: otherParams,
    };
  }
  return request;
};

module.exports = { after, before };
