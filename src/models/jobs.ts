import { sequelize } from '../database/index';
import { DataTypes, Model } from 'sequelize';

interface JobsInstance extends Model {
  id: number;
  title: string;
  description: string;
  limitDate: Date;
  companyId: number;
}

export const Jobs = sequelize.define<JobsInstance>(
  'jobs',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    limitDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    companyId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'companies',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'RESTRICT'
    }
  }
)