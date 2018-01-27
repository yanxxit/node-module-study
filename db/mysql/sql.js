const ModelClass = require('./ModelClass');
const fs = require('fs');
const moment = require('moment')
const uuid = require('node-uuid');
const client = new ModelClass('127.0.0.1', 'root', 'root', 'shdx', '3306');


var fmt = function (data, index) {
    fs.appendFile('insert.sql', data + ' \n', function () {
        console.log('-----' + index);
    });
};

var deal = function (m) {
    var ct = moment(m.createtime * 1000).format("YYYY-MM-DD HH:mm:ss")
    var ut = moment(m.updatetime * 1000).format("YYYY-MM-DD HH:mm:ss")
    //465454||465||国际漫游（语音）开通||N||Y
    var wn = m.workname.split("||")[2];
    pName = wn.slice(0, wn.length - 2)
    pType = (wn.slice(wn.length - 2, wn.length) == '开通') ? "CRM001" : 'CRM002';

    vid1 = uuid.v4();
    vid2 = uuid.v4();
    vid3 = uuid.v4();
    console.log(vid1)
    console.log(vid2)
    console.log(vid3)
    console.log("------+++++++++++++++=================")

    var str = " INSERT INTO `backend`.`dzqd_order_main` (`f_id`, `f_number`, `f_createtime`, `f_last_updatetime`, `f_split_paysn`, `f_channel_id`, `f_grp_father_id`, `f_father_id`, `f_son_id`, `f_deal_type`, `f_pay_way_id`, `f_crm_no`, `f_crm_user_no`, `f_crm_pay_user_no`, `f_status`, " +
        "`f_main_num`, `f_pay_status`, `f_pay_time`, `f_sale_goods_name`, `f_sale_goos_no`, `f_amount`, `f_amount_inv`, `f_member_id`, `f_equipment_id`, `f_pay_type_id`," +
        " `f_member_type_id`, `f_open_status`, `f_isEx_Flag`, `f_handler`, `f_remark`, `f_isOld`) " +
        " VALUES ('" + vid1 + "', '" + m.orderid + "', '" + ct + "', '" + ut + "', NULL, '30010005', 'SJB900', 'SJB901', '', 'BT1001', NULL, '" + m.singleid + "', 'CX_DZDQWX', NULL," +
        " 'S1013', '" + m.number + "', NULL, NULL, '" + pName + "', '" + m.workid + "', NULL, NULL, '" + m.number + "', '" + m.number + "', NULL, '0', '0', '0', '1', NULL, '1');"

        + "\n INSERT INTO `backend`.`dzqd_order_cus` (`f_id`, `f_parent_ID`, `f_number`, `f_cus_Name`, `f_cus_Tel`, `f_cus_Zd_Add`, `f_cus_ZJ_Type`, `f_cus_ZJ_Num`, `f_cus_ZJ_Add`, `f_cus_CRMID`, `f_cus_Is_First`) " +
        " VALUES ('" + vid2 + "', '" + vid1 + "', '" + m.orderid + "', 'getCustName', 'getCustPhone', 'getAddress', '身份证', 'getIDNumber', NULL, 'getCRMID', NULL);"

        + "\n INSERT INTO `backend`.`dzqd_order_entry` (`f_id`, `f_number`, `f_parent_ID`, `f_price`, `f_Amount`, `f_Amount_Inv`, `f_qty`, `f_User_remark`, `f_Crm_Deal_Type_ID`, " +
        "`f_num_From_Flag`, `f_CRM_Uer_No`, `f_deal_Type`, `f_CRM_Sale_Goods`, `f_CRM_No`, `f_CRM_PPM_No`, `f_sales_Name`, `f_CRM_Row_ID`, `f_Material_ID`, `f_Material_Ass_ID`," +
        " `f_supper_Id`, `f_ICCID`, `f_ICCID_Ph`, `f_Msg_ID`, `f_Sn_No`, `f_Broadband_Old`, `f_Broadband_Add`, `f_Do_Auth`, `f_Other_ID`, `f_Move_ID`, `f_remark`, `ismain`," +
        " `netType`, `f_createtime`) " +
        " VALUES ('" + vid3 + "', '" + m.orderid + "', '" + vid1 + "', NULL, NULL, NULL, '1', NULL, '" + pType + "', NULL, '" + m.number + "', 'CB001', NULL, '" + m.workid + "', NULL," +
        " '" + pName + "', NULL, NULL, NULL, NULL, NULL, NULL, '20170722173503932', NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL, '" + ct + "');"
    fmt(str, 0)
}

var strsql = "select * from dx_order_sub where `status`=100 and res=100 and workname like '%||%'";


client.ExecSql(strsql, function (err, data) {
    if (err) {
        console.log(err)
    } else {
        for (var i = 0; i < data.length; i++) {
            var m = data[i];
            deal(m);
        }
    }
});