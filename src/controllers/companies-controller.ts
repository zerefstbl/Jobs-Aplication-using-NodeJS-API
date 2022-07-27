import { Request, Response } from 'express';
import { Company } from '../models';

export const companiesController = {
  index: async (req: Request, res: Response) => {
    try {
      const companies = await Company.findAll();

      return res.status(200).json({ message: companies });

    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  save: async (req: Request, res: Response) => {
    const { name, bio, email, website } = req.body;
    try {
      const company = await Company.create({
        name,
        bio,
        email,
        website
      })
      return res.status(201).json({ message: company });
    } catch (err) {
      if(err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  show: async(req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const company = await Company.findByPk(id, { include: 'jobs' });

      if (!company) {
        throw new Error('Invalid ID');
      };

      return res.status(200).json({ message: company });
    } catch (err) {
      if(err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  delete: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await Company.destroy({ where: { id } });
      return res.status(201).json({ message: 'Company has been deleted!' });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  update: async(req: Request, res: Response) => {
    const { id } = req.params;
    const { name, bio, website, email } = req.body;

    try {
      const [, companie] = await Company.update({
        name,
        bio,
        website,
        email
      }, {
        where: { id },
        returning: true
      })

      return res.status(200).json({ message: companie });
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  }
}