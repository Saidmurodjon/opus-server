const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
const mongooseAdminBro = require("@admin-bro/mongoose");
const {
  ADMIN_EMAIL,
  ADMIN_PASSWORD,
  ADMIN_COOKIE_NAME,
  ADMIN_COOKIE_PASS,
} = require("../../../config/swagger/config");

const ADMIN = {
  email: ADMIN_EMAIL,
  password: ADMIN_PASSWORD,
};
// Modeles
const User = require("../models/User");
const Order = require("../models/Order");
const Contact = require("../models/Contact");
const SatUploader = require("./uploader/SatUploader");
const IeltsUploader = require("./uploader/IeltsUploader");
const CefrUploader = require("./uploader/CefrUploader");

AdminBro.registerAdapter(mongooseAdminBro);
const AdminBroOptions = {
  resources: [
    {
      resource: User,
      options: {
        parent: { name: "Admin" },
        properties: {
          _id: { isVisible: false },
        },
      },
    },
   
    {
      resource: Order,
      options: {
        parent: { name: "Admin" },
        properties: {
          _id: { isVisible: false },
          isOrdered: {
            type: "textarea",
          },
        },
      },
    },

 
    {
      resource: Contact,
      options: {
        parent: { name: "Admin" },
        properties: {
          message: {
            type: "richtext",
          },
        },
      },
    },
    CefrUploader,
    IeltsUploader,
    SatUploader,
  ],
  branding: {
    companyName: "Opus",
    softwareBrothers: false,
    logo: "/public/images/logo.png",
    favicon: "/public/images/logo.png",
  },
  locale: {
    translations: {
      messages: {
        loginWelcome: "Administration Panel - Login", // the smaller text
      },
      labels: {
        loginWelcome: "OPUS.UZ", // this could be your project name
      },
    },
  },
  assets: {
    styles: [""],
  },
};

const adminBro = new AdminBro(AdminBroOptions);
const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  cookieName: ADMIN_COOKIE_NAME || "admin-bro",
  cookiePassword:
    ADMIN_COOKIE_PASS ||
    "supersecret-and-long-password-for-a-cookie-in-the-browser",
  authenticate: async (email, password) => {
    if (ADMIN_EMAIL === email && ADMIN_PASSWORD === password) {
      return ADMIN;
    }
    return null;
  },
});

module.exports = router;
