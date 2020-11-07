module.exports = (sequelize, Sequelize, DataTypes) => {
    const Product = sequelize.define(
        "product", // Model name
        {
            // Model attributes
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING
            },
            description: {
                type: DataTypes.STRING
            },
            type: {
                type: DataTypes.STRING
            },
            price: {
                type: DataTypes.STRING
            },
            created_by: {
                type: DataTypes.STRING
            },
            status: {
                type: DataTypes.BOOLEAN
            },
            created_at: {
                allowNull: false,
                type: DataTypes.DATE
            },
            updated_at: {
                allowNull: false,
                type: DataTypes.DATE
            }
        },
        {
            // Options
            timestamps: true,
            underscrored: true,
            createdAt: "created_at",
            updatedAt: "updated_at"
        }
    );

    return Product;
};
