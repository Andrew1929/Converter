const ConversionSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, 
    originalFileName: { type: String, required: true },
    convertedFileName: { type: String, required: true },
    originalFormat: { type: String, required: true },
    convertedFormat: { type: String, required: true },
    status: { type: String, enum: ["pending", "success", "failed"], default: "pending" },
    createdAt: { type: Date, default: Date.now }
});

export default model("Conversion", ConversionSchema);
