// source: common.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.goods.BaseResp', null, global);
goog.exportSymbol('proto.goods.Client', null, global);
goog.exportSymbol('proto.goods.ErrNo', null, global);
goog.exportSymbol('proto.goods.Goods', null, global);
goog.exportSymbol('proto.goods.GoodsType', null, global);
goog.exportSymbol('proto.goods.Order', null, global);
goog.exportSymbol('proto.goods.OrderStatus', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.goods.BaseResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goods.BaseResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goods.BaseResp.displayName = 'proto.goods.BaseResp';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.goods.Goods = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goods.Goods, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goods.Goods.displayName = 'proto.goods.Goods';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.goods.Client = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goods.Client, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goods.Client.displayName = 'proto.goods.Client';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.goods.Order = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goods.Order, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goods.Order.displayName = 'proto.goods.Order';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.goods.BaseResp.prototype.toObject = function(opt_includeInstance) {
  return proto.goods.BaseResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goods.BaseResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goods.BaseResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    errNo: jspb.Message.getFieldWithDefault(msg, 1, 0),
    msg: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.goods.BaseResp}
 */
proto.goods.BaseResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goods.BaseResp;
  return proto.goods.BaseResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goods.BaseResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goods.BaseResp}
 */
proto.goods.BaseResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.goods.ErrNo} */ (reader.readEnum());
      msg.setErrNo(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.goods.BaseResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goods.BaseResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goods.BaseResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goods.BaseResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrNo();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional ErrNo err_no = 1;
 * @return {!proto.goods.ErrNo}
 */
proto.goods.BaseResp.prototype.getErrNo = function() {
  return /** @type {!proto.goods.ErrNo} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.goods.ErrNo} value
 * @return {!proto.goods.BaseResp} returns this
 */
proto.goods.BaseResp.prototype.setErrNo = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string msg = 2;
 * @return {string}
 */
proto.goods.BaseResp.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.goods.BaseResp} returns this
 */
proto.goods.BaseResp.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.goods.Goods.prototype.toObject = function(opt_includeInstance) {
  return proto.goods.Goods.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goods.Goods} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goods.Goods.toObject = function(includeInstance, msg) {
  var f, obj = {
    goodsId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    goodsType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    goodsName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    goodsDescription: jspb.Message.getFieldWithDefault(msg, 4, ""),
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    pictureUrl: jspb.Message.getFieldWithDefault(msg, 6, ""),
    discount: jspb.Message.getFieldWithDefault(msg, 7, 0),
    inventory: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.goods.Goods}
 */
proto.goods.Goods.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goods.Goods;
  return proto.goods.Goods.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goods.Goods} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goods.Goods}
 */
proto.goods.Goods.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGoodsId(value);
      break;
    case 2:
      var value = /** @type {!proto.goods.GoodsType} */ (reader.readEnum());
      msg.setGoodsType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setGoodsName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setGoodsDescription(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPrice(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPictureUrl(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDiscount(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInventory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.goods.Goods.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goods.Goods.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goods.Goods} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goods.Goods.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGoodsId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getGoodsType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getGoodsName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getGoodsDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getPictureUrl();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDiscount();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getInventory();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
};


/**
 * optional int32 goods_id = 1;
 * @return {number}
 */
proto.goods.Goods.prototype.getGoodsId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.goods.Goods} returns this
 */
proto.goods.Goods.prototype.setGoodsId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional GoodsType goods_type = 2;
 * @return {!proto.goods.GoodsType}
 */
proto.goods.Goods.prototype.getGoodsType = function() {
  return /** @type {!proto.goods.GoodsType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.goods.GoodsType} value
 * @return {!proto.goods.Goods} returns this
 */
proto.goods.Goods.prototype.setGoodsType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string goods_name = 3;
 * @return {string}
 */
proto.goods.Goods.prototype.getGoodsName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.goods.Goods} returns this
 */
proto.goods.Goods.prototype.setGoodsName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string goods_description = 4;
 * @return {string}
 */
proto.goods.Goods.prototype.getGoodsDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.goods.Goods} returns this
 */
proto.goods.Goods.prototype.setGoodsDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional float price = 5;
 * @return {number}
 */
proto.goods.Goods.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.goods.Goods} returns this
 */
proto.goods.Goods.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional string picture_url = 6;
 * @return {string}
 */
proto.goods.Goods.prototype.getPictureUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.goods.Goods} returns this
 */
proto.goods.Goods.prototype.setPictureUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 discount = 7;
 * @return {number}
 */
proto.goods.Goods.prototype.getDiscount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.goods.Goods} returns this
 */
proto.goods.Goods.prototype.setDiscount = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 inventory = 8;
 * @return {number}
 */
proto.goods.Goods.prototype.getInventory = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.goods.Goods} returns this
 */
proto.goods.Goods.prototype.setInventory = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.goods.Client.prototype.toObject = function(opt_includeInstance) {
  return proto.goods.Client.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goods.Client} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goods.Client.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tel: jspb.Message.getFieldWithDefault(msg, 3, ""),
    passwd: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.goods.Client}
 */
proto.goods.Client.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goods.Client;
  return proto.goods.Client.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goods.Client} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goods.Client}
 */
proto.goods.Client.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setClientId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTel(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPasswd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.goods.Client.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goods.Client.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goods.Client} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goods.Client.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTel();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPasswd();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int32 client_id = 1;
 * @return {number}
 */
proto.goods.Client.prototype.getClientId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.goods.Client} returns this
 */
proto.goods.Client.prototype.setClientId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.goods.Client.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.goods.Client} returns this
 */
proto.goods.Client.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string tel = 3;
 * @return {string}
 */
proto.goods.Client.prototype.getTel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.goods.Client} returns this
 */
proto.goods.Client.prototype.setTel = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string passwd = 4;
 * @return {string}
 */
proto.goods.Client.prototype.getPasswd = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.goods.Client} returns this
 */
proto.goods.Client.prototype.setPasswd = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.goods.Order.prototype.toObject = function(opt_includeInstance) {
  return proto.goods.Order.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goods.Order} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goods.Order.toObject = function(includeInstance, msg) {
  var f, obj = {
    orderId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    goodsId: jspb.Message.getFieldWithDefault(msg, 2, 0),
    clientId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    num: jspb.Message.getFieldWithDefault(msg, 4, 0),
    orderStatus: jspb.Message.getFieldWithDefault(msg, 5, 0),
    goodsName: jspb.Message.getFieldWithDefault(msg, 6, ""),
    price: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    clientName: jspb.Message.getFieldWithDefault(msg, 8, ""),
    clientTel: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.goods.Order}
 */
proto.goods.Order.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goods.Order;
  return proto.goods.Order.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goods.Order} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goods.Order}
 */
proto.goods.Order.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOrderId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGoodsId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setClientId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNum(value);
      break;
    case 5:
      var value = /** @type {!proto.goods.OrderStatus} */ (reader.readEnum());
      msg.setOrderStatus(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setGoodsName(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPrice(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientName(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientTel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.goods.Order.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goods.Order.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goods.Order} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goods.Order.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getGoodsId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getClientId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getNum();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getOrderStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getGoodsName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getClientName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getClientTel();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional int32 order_id = 1;
 * @return {number}
 */
proto.goods.Order.prototype.getOrderId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.goods.Order} returns this
 */
proto.goods.Order.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 goods_id = 2;
 * @return {number}
 */
proto.goods.Order.prototype.getGoodsId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.goods.Order} returns this
 */
proto.goods.Order.prototype.setGoodsId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 client_id = 3;
 * @return {number}
 */
proto.goods.Order.prototype.getClientId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.goods.Order} returns this
 */
proto.goods.Order.prototype.setClientId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 num = 4;
 * @return {number}
 */
proto.goods.Order.prototype.getNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.goods.Order} returns this
 */
proto.goods.Order.prototype.setNum = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional OrderStatus order_status = 5;
 * @return {!proto.goods.OrderStatus}
 */
proto.goods.Order.prototype.getOrderStatus = function() {
  return /** @type {!proto.goods.OrderStatus} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.goods.OrderStatus} value
 * @return {!proto.goods.Order} returns this
 */
proto.goods.Order.prototype.setOrderStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional string goods_name = 6;
 * @return {string}
 */
proto.goods.Order.prototype.getGoodsName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.goods.Order} returns this
 */
proto.goods.Order.prototype.setGoodsName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional float price = 7;
 * @return {number}
 */
proto.goods.Order.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.goods.Order} returns this
 */
proto.goods.Order.prototype.setPrice = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional string client_name = 8;
 * @return {string}
 */
proto.goods.Order.prototype.getClientName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.goods.Order} returns this
 */
proto.goods.Order.prototype.setClientName = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string client_tel = 9;
 * @return {string}
 */
proto.goods.Order.prototype.getClientTel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.goods.Order} returns this
 */
proto.goods.Order.prototype.setClientTel = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * @enum {number}
 */
proto.goods.GoodsType = {
  GOODSTYPE_UNKNOWN: 0,
  GOODSTYPE_FOOD: 1,
  GOODSTYPE_CLOTHE: 2,
  GOODSTYPE_MOBILEPHONE: 3,
  GOODSTYPE_DESKTOP: 4
};

/**
 * @enum {number}
 */
proto.goods.OrderStatus = {
  ORDERSTATUS_UNKNOWN: 0,
  ORDERSTATUS_WAITPAY: 1,
  ORDERSTATUS_PAID: 2,
  ORDERSTATUS_WAITSEND: 3,
  ORDERSTATUS_SENT: 4,
  ORDERSTATUS_RECEIVED: 5
};

/**
 * @enum {number}
 */
proto.goods.ErrNo = {
  ERRNO_SUCCESS: 0,
  ERRNO_FAILED: 1,
  ERRNO_REQ_ILLEGAL: 2,
  ERRNO_USER_HAS_EXISTED: 3
};

goog.object.extend(exports, proto.goods);
