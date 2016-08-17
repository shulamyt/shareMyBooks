function BasePersistence(){
};
BasePersistence.prototype.dbConfig={
	server:"localhost\\MSSQLSERVER",
	port:1433,
	database:"smb_test",
	user:"sa",
	password:"123456"
};

BasePersistence.prototype.func=function(){
	console.log("hello from func in base");
}

module.exports = BasePersistence;