const AdminBro = require("admin-bro");
const Model = require("../../models/Sat");

const {
  after: passwordAfterHook,
  before: passwordBeforeHook,
} = require("../actions/password.hook");

const {
  after: uploadAfterHook,
  before: uploadBeforeHook,
} = require("../actions/upload.image.hook");

/** @type {AdminBro.ResourceOptions} */
const options = {
  resource: Model,
  options: {
    parent: { name: "Our Results" },
    properties: {
      _id: { isVisible: false },
    },
    properties: {
      photo: {
        components: {
          edit: AdminBro.bundle("../components/profil-photo-edit.tsx"),
          list: AdminBro.bundle("../components/upload-image.list.tsx"),
        },
      },
    },
    actions: {
      new: {
        after: async (response, request, context) => {
          const modifiedResponse = await passwordAfterHook(
            response,
            request,
            context
          );
          return uploadAfterHook(modifiedResponse, request, context);
        },
        before: async (request, context) => {
          const modifiedRequest = await passwordBeforeHook(request, context);
          return uploadBeforeHook(modifiedRequest, context);
        },
      },
      edit: {
        after: async (response, request, context) => {
          const modifiedResponse = await passwordAfterHook(
            response,
            request,
            context
          );
          return uploadAfterHook(modifiedResponse, request, context);
        },
        before: async (request, context) => {
          const modifiedRequest = await passwordBeforeHook(request, context);
          return uploadBeforeHook(modifiedRequest, context);
        },
      },
      show: {
        isVisible: false,
      },
    },
  },
};

module.exports = options;
