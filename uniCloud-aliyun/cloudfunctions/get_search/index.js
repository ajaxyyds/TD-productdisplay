'use strict';
const db=uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const{
		value
	} = event
	
	
	const list=await db.collection('commodity')
	.aggregate()
	.match({
		name:new RegExp(value)
	})
	.end()
	//返回数据给客户端
	return {
		
		data: list.data
	}
};
