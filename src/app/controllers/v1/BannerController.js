import * as Yup from 'yup';
import Banner from '../../models/Banner';

class BannerController {
  async index(req, res) {
    const banners = await Banner.find();
    return res.json(banners);
  }

  async create(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      order: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Error validation' });
    }

    const orderBanner = req.body.order;
    const orderBannerExists = await Banner.findOne({ order: orderBanner });

    if (orderBannerExists) {
      return res.status(400).json({ error: 'Order already exists.' });
    }

    const { title, order, active } = await Banner.create(req.body);
    return res.json({
      title,
      order,
      active,
    });
  }

  async show(req, res) {
    const { id } = req.params;
    if (!id) return res.status(404).json({});
    try {
      const banner = await Banner.findById(id);
      return res.json(banner);
    } catch (e) {
      return res.status(404).json({});
    }
  }

  async update(req, res) {
    const { id } = req.params;
    if (!id) return res.status(404).json({});

    const orderBanner = req.body.order;
    const orderBannerExists = await Banner.findOne({ order: orderBanner });

    if (orderBannerExists) {
      return res.status(400).json({ error: 'Order already exists.' });
    }

    try {
      const banner = await Banner.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      return res.json(banner);
    } catch (e) {
      return res.status(404).json({});
    }
  }

  async destroy(req, res) {
    const { id } = req.params;
    if (!id) return res.status(404).json({});
    try {
      await Banner.findByIdAndRemove(id);
      return res.send();
    } catch (e) {
      return res.status(404).json({});
    }
  }
}

export default new BannerController();
