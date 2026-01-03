const ensureAuthenticated = require("../Middlewares/Auth");
const router = require("express").Router();

router.get("/", ensureAuthenticated, (req, res) => {
  console.log("Logged in user:", req.user);

  res.status(200).json([
    {
      name: "iPhone",
      price: 10000,
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-card-40-17pro-202509_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=WVVFRzUzVk1oblJhbW9PbGNSU25ja3doNjVzb1FWSTVwZWJJYThYTHlrNzQzbUlIR1RvazhDRHNOQlYvM3g2dFIwdkZSSnBZYjhOaHBpM2lkYTFBUEZHTmVoMWFVZloyU3lqdmZCOUFEeDF6K2N6UFd4K21VWHNnbWZBQ3hSanQ"
    },
    {
      name: "Samsung",
      price: 20000,
      image: "https://firsthub.in/public/uploads/all/Bu6UKE0FxPmcug7XxHUbE3JMcajsYqAt4tE6kLv9.webp"
    },
    {
      name: "Poco",
      price: 30000,
      image: "https://i02.appmifile.com/21_operatorx_operatorx_opx/23/04/2025/5dbab426107b30a306e318e9320956bf.png"
    }
  ]);
});

module.exports = router;
