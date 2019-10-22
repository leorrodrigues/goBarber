module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('appointments', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
			},
			date: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			user_id: {
				type: Sequelize.INTEGER,
				references: { model: 'users', key: 'id' },
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL',
				allowNULL: true,
			},
			provider_id: {
				type: Sequelize.INTEGER,
				references: { model: 'users', key: 'id' },
				onUpdate: 'CASCADE',
				onDelete: 'SET NULL',
				allowNULL: true,
			},
			canceled_at: {
				type: Sequelize.DATE,
			},
			created_at: {
				type: Sequelize.DATE,
				allowNULL: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNULL: false,
			},
		});
	},

	down: queryInterface => {
		return queryInterface.dropTable('appointments');
	},
};
