import { DataTypes, Model, Sequelize } from 'sequelize';

interface Model1Attributes {
  example: string;
  //other examples
  
}

class Model1 extends Model<Model1Attributes> implements Model1Attributes {
  public example!: string;
 

 
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default (sequelize: Sequelize) => {
    Model1.init(
    {
      example: {
        type: DataTypes.STRING,
        allowNull: false,
      },
     //
     //
    },
    {
      sequelize,
      modelName: 'model',
    }
  );

  return Model1;
};
