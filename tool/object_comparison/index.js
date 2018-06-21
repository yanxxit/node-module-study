//cms
var cms ={
	// 订单号(日期+流水号*+随机数)
	// 旧: 20170428040944201559
	order_no: { type: String, unique: true },

	// 商品的标题/交易标题/订单标题/订单关键字等。
	subject: { type: String, required: true },

	// 该订单的备注、描述、明细等
	remark: { type: String, default: '' },

	// 订单总金额，单位为元
	// 精确到小数点后两位
	total_amount: { type: Number, default: 0 },

	// 减免价格(优惠券金额)
	discount_amount: { type: Number, default: 0 },

	// 最终应付款金额
	final_amount: { type: Number, default: 0 },

	// 商品类型
	/**
	 * goods: 商品(酒水)
	 * minimum：最低消费
	 * ticket: 活动门票
	 * gift: 虚拟礼物
	 * song: 点歌
	 * award: 打赏
	 */
	goods_type: { type: String },

	// 商品详细列表
	goods_detail: { type: {}, required: true },

	/** 优惠券列表 */
	coupons: [{
			id: String,
			name: String,
			amount: { type: Number, default: 0 },
			/**
			 * 适用类型
			 * "order": 适用订单（整单）
			 * "goods": 适用商品（指定商品）
			 */
			fit_type: String,
			//应用于商品ID
			apply_goods_id: String
	}],

	/** 折扣列表 */
	discounts: [{
			id: String,
			name: String,
			amount: { type: Number, default: 0 },
	}],

	// 商户ID
	shop_id: { type: String, required: true },

	// 商户名字
	shop_name: { type: String, required: true },

	// 演出ID
	show_id: { type: String },

	// 演出日期
	show_date: { type: String },

	// 商户桌号
	shop_desk_no: { type: String, default: '' },

	// 商户自定义桌号
	shop_desk: { type: String, default: '' },

	// 买家用户唯一标识(用户ID)
	buyer_user_id: { type: Number, required: true },

	// 买家用户名称
	buyer_user_name: { type: String, required: true },

	// 买家用户类型
	// 1: 正常用户；2：虚拟用户；3：测试用户
	buyer_user_type: { type: Number, required: true },

	// 交易状态
	/**
	 * 'TRADE_CREATED': 交易创建(等待买家付款)
	 * 'TRADE_WAIT_PROCESS': 等待处理（现金支付，等待收款） 
	 * 'TRADE_SUCCESS'：支付成功(交易全部支付成功)
	 * 'TRADE_PROCESSED'：交易已处理(订单已确认)
	 * 'TRADE_FINISHED': 交易完成(财务已结算,不可退款)
	 * 'TRADE_CANCELED': 交易取消
	 * 'TRADE_CLOSED' 订单关闭(未付款交易超时关闭或支付完成后已全额退款)
	 */
	trade_status: { type: String, default: 'TRADE_CREATED' },

	payments: [{}],

	// 订单创建时间 (s)
	// Unix Time Stamp, parseInt(Date.now()/1000)
	uts_create: { type: Number },

	// 订单支付完成时间
	uts_payment: { type: Number },

	// 订单处理时间
	uts_process: { type: Number },

	// 订单关闭时间
	uts_close: { type: Number },

	// 订单完成时间
	uts_finish: { type: Number },

	// 客户端信息
	/**
		 {
			 user_agent: "User-Agent信息",
			 ip: "客户终端IP地址",
			 ...
		 }
	 */
	client_info: {},

	// 数据记录时间 Unix Time Stamp
	created: Number,

	// 数据更新时间
	updated: Number
}

//common
var tingodb ={
	// 订单号(日期+流水号*+随机数)
	// 旧: 20170428 0409 201559
	order_no: { type: String, unique: true },

	// 商品的标题/交易标题/订单标题/订单关键字等。
	subject: { type: String, required: true },

	// 该订单的备注、描述、明细等
	remark: { type: String, default: '' },

	// 订单总金额，单位为分
	total_amount: { type: Number, default: 0 },

	// 减免价格(优惠券金额)
	discount_amount: { type: Number, default: 0 },

	/** 最终应付款金额 */
	final_amount: { type: Number, default: 0, min: 0 },

	/** 结算金额 */
	finance_amount: { type: Number, default: 0 },


	// /** 是否出单 */
	is_out: { type: Number, default: 0 },

	/**
	 * 商品类型
	 * goods: 商品(酒水)
	 * minimum：最低消费
	 * ticket: 活动门票
	 * gift: 虚拟礼物
	 * song: 点歌
	 * award: 打赏
	 */
	goods_type: { type: String },

	/** 商品详细列表 */
	goods_detail: { type: Object, default: { goods: [] } },

	/** 优惠券列表 */
	coupons: [{
			id: String,
			name: String,
			amount: { type: Number, default: 0 },
			/**
			 * 适用类型
			 * "order": 适用订单（整单）
			 * "goods": 适用商品（指定商品）
			 */
			fit_type: String,
			//应用于商品ID
			apply_goods_id: String
	}],

	/** 折扣列表 */
	discounts: [{
			id: String,
			name: String,
			amount: { type: Number, default: 0 },
	}],

	// 商户ID
	shop_id: { type: String, required: true },

	// 打印号
	print_no: { type: String },

	// 商户名字
	shop_name: { type: String, required: true },

	// 演出时间
	show_date: { type: String },

	// 商户桌号
	shop_desk_no: { type: String, default: '' },

	// 商户自定义桌号
	shop_desk: { type: String, default: '' },

	// 买家用户唯一标识(用户ID)
	buyer_user_id: { type: Number, required: true },

	// 买家用户名称
	buyer_user_name: { type: String, required: true },
	// 买家用户类型
	// 1: 正常用户；2：虚拟用户；3：测试用户
	buyer_user_type: { type: Number, required: true },

	// 交易状态
	/**
	 * 'TRADE_CREATED': 交易创建(等待买家付款)
	 * 'TRADE_WAIT_PROCESS': 现场支付
	 * 'TRADE_SUCCESS'：支付成功(交易全部支付成功)
	 * 'TRADE_PROCESSED'：交易已处理(订单已确认)
	 * 'TRADE_FINISHED': 交易完成(财务已结算,不可退款)
	 * 'TRADE_CLOSED' 订单关闭(未付款交易超时关闭或支付完成后已全额退款)
	 * 'TRADE_CANCELED' 交易取消（生成新订单原订单作废）
	 */
	trade_status: {
			type: String,
			default: 'TRADE_CREATED',
			set: function (trade_status) {
					this._pre_trade_status = this.trade_status;
					return trade_status;
			}
	},

	/** 是否已删除 1、表示删除 0、表示未删除(默认)*/
	is_deleted: { type: Number, default: 0 },

	payments: { type: Array, default: [] },

	// 被合并进来的低效订单号
	mini_order_no: { type: [], default: [] },
	//  被关闭的订单号
	refer_order_no: { type: String },

	is_first: { type: Number, default: 0 },

	// 订单创建时间 (s)
	// Unix Time Stamp, parseInt(Date.now()/1000)
	uts_create: { type: Number },

	/**
	 * 订单平台 目前只有:
	 *      APP     APP平台 默认
	 *      WX_MP   微信公众号
	 */
	platform: { type: String, default: 'APP' },

	// 订单支付完成时间
	uts_payment: { type: Number },

	// 订单处理时间
	uts_process: { type: Number },

	// 订单关闭时间
	uts_close: { type: Number },

	// 订单完成时间
	uts_finish: { type: Number },


	// 客户端信息
	/**
		 {
			 user_agent: "User-Agent信息",
			 ip: "客户终端IP地址",
			 ...
		 }
	 */
	client_info: {},

	// 数据记录时间 Unix Time Stamp
	created: Number,

	// 数据更新时间
	updated: Number,

}

for (let m in cms) {
	if (!tingodb[m]) {
		console.log("tingodb 缺少 cms中的节点", m);
	}
}

for (let m in tingodb) {
	if (!cms[m]) {
		console.log("cms 缺少 tingodb中的节点", m);
	}
}
