const AppError = require("../utils/appError");
const Vendor = require("./../models/vendorModel");
const APIFeatures = require("./../utils/apiFeatures");
const catchAsync = require("./../utils/catchAsync");

exports.getAllVendors = catchAsync(async (req, res, next) => {
  // Execute Query
  const features = new APIFeatures(Vendor.find(), req.query).paginate();
  const vendor = await features.query;
  res.status(200).json({
    status: "success",
    results: vendor.length,
    data: {
      vendor,
    },
  });
});

exports.getVendor = catchAsync(async (req, res, next) => {
  const vendor = await vendor.findById(req.params.id);
  if (!vendor) {
    return next(new AppError("No tour found with that Id", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      vendor,
    },
  });
});

exports.createVendor = catchAsync(async (req, res, next) => {
  const newvendor = await Vendor.create(req.body);
  res.status(201).json({
    status: "succsess",
    data: {
      tour: newvendor,
    },
  });
});

exports.updateVendor = catchAsync(async (req, res, next) => {
  const vendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: false,
  });
  if (!vendor) {
    return next(new AppError("No tour found with that Id", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      vendor,
    },
  });
});

exports.deleteVendor = catchAsync(async (req, res, next) => {
  const vendor = await Vendor.findByIdAndDelete(req.params.id);
  if (!vendor) {
    return next(new AppError("No tour found with that Id", 404));
  }
  res.status(204).json({
    status: "success",
    data: null,
  });
});
