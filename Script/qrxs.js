var obj = JSON.parse($response.body);
 obj= {
  "status": "success",
  "data": {
   "data": {
    "sex": "1",
    "avatar": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573121472669&di=2c11ef9ea7c89c76d14632e9e456c67f&imgtype=0&src=http%3A%2F%2Ftx.haiqq.com%2Fuploads%2Fallimg%2F170826%2F04451MY6-2.jpg",
    "xcx_vip_expire": "1604646240",
    "id": "127391006",
    "is_newcomer": 1,
    "is_first_order": "",
    "cdate_": "2019-11-06",
    "uid": "127391006",
    "province_id": "0",
    "wap_auto_buy": "0",
    "city_id": "0",
    "xcx_vip": "2",
    "type": "1",
    "channel": "0",
    "mobile": "18888888888",
    "nickname": "大雄脚本组",
    "area_id": "0",
    "v2_bookcoin": 0,
    "area_text": "",
    "last_login_time": "2019-11-06 23:57:08",
    "truename": "",
    "timeStamp": 1888690331,
    "is_channel_user": 1,
    "vip": 2,
    "is_channel": "",
    "vip_expire": "1604646240",
    "last_order_channel": "0",
    "birthday": "0000-00-00",
    "isapp": 1,
    "have_voucher": 0,
    "bookvoucher": 15,
    "expire_days": 365,
    "is_reg": 0,
    "share_rule_count": 1,
    "share_rule_day": 2,
    "rand": 84059,
    "sign": "b9407d034f704173fc0c5ef5e923b3208374db7b5d223d313377ca9f9eb11dce",
    "follow": 0,
    "flux": 0,

   }
  },
  "msg": "操作成功",
  "code": 1
 };
$done({body: JSON.stringify(obj)});
//

