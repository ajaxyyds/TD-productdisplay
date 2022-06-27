'use strict';
const db=uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	//context包含调用信息和运行状态、获取每次调用的上下文
	let store = await db.collection('commodity').get()
	
	//返回数据给客户端
	return {
		data:store.data
	}
};
