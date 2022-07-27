import { sequelize } from '../database/index';
import { DataTypes, Model } from 'sequelize';

interface CompanyInstance extends Model {
  id: number;
  name: string;
  bio: string;
  website: string;
  email: string;
}

export const Company = sequelize.define<CompanyInstance>(
  'companies',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: DataTypes.STRING,
    bio: DataTypes.TEXT,
    website: DataTypes.STRING
  }
)
