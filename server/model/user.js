function User(password,f_name,l_name,email,phone,address){
	this.password=password;
	this.f_name=f_name;
    this.l_name=l_name;
	this.phone=phone;
	this.address=address;
	this.email=email
};

var user = new User();
module.exports = user;
