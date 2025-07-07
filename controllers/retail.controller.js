const RetailPrice = require('../models/RetailPrice');

exports.createRetailPrice = async (req, res) => {
  try {
    const data = req.body;
    data.uploadedBy = req.user.userId;

    const newEntry = new RetailPrice(data);
    await newEntry.save();

    res.status(201).json({ message: 'Retail price uploaded', data: newEntry });
  } catch (err) {
    res.status(500).json({ message: 'Upload failed', error: err.message });
  }
};

exports.getRetailPrices = async (req, res) => {
  try {
    const { region, state, product, page = 1, limit = 10 } = req.query;
    const query = {};

    if (region) query.region = region;
    if (state) query.state = state;
    if (product) query.product = product;

    const prices = await RetailPrice.find(query)
      .populate('uploadedBy', 'name email')
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    res.json(prices);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch', error: err.message });
  }
};

exports.approveRetailPrice = async (req, res) => {
  try {
    const price = await RetailPrice.findByIdAndUpdate(
      req.params.id,
      { status: 'approved' },
      { new: true }
    );
    if (!price) return res.status(404).json({ message: 'Entry not found' });

    res.json({ message: 'Retail price approved', data: price });
  } catch (err) {
    res.status(500).json({ message: 'Error approving', error: err.message });
  }
};


exports.deleteRetailPrice = async (req, res) => {
  try {
    const price = await RetailPrice.findByIdAndDelete(req.params.id);
    if (!price) return res.status(404).json({ message: 'Retail price not found' });

    res.json({ message: 'Retail price deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete', error: err.message });
  }
};
