function userService($http){
	return {
		get : function() {
			return $http.get('/api/users');
		},
		findOne : function(id){
			return $http.get('/api/users/' + id);
		},
		findMail : function(email){
			return $http.get('/api/users/email/' + email);
		},
		findByNameSurname : function(name,surname){
			return $http.get('/api/users/' + name +'/'+ surname);
		},
		create : function(user){
			return $http.post('/api/users', user);
		},
		createFriend : function(data){
			return $http.post('/api/users/friends', data);
		},
		update : function(id, data){
            return $http.put('/api/users/' + id, data);
    },
		deleteFriend : function(userId,friendId) {
				return $http.delete('/api/users/friends/' +userId+'/'+friendId);
		},
		mailInvitAmi : function(datas) {
				return $http.post('/mail', datas);
		},
	};
}
