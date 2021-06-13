// source: query_order.proto
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

var common_pb = require('./common_pb.js');
goog.object.extend(proto, common_pb);
goog.exportSymbol('proto.goods_admin.QueryOrderRequest', null, global);
goog.exportSymbol('proto.goods_admin.QueryOrderResponse', null, global);
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
proto.goods_admin.QueryOrderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goods_admin.QueryOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goods_admin.QueryOrderRequest.displayName = 'proto.goods_admin.QueryOrderRequest';
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
proto.goods_admin.QueryOrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.goods_admin.QueryOrderResponse.repeatedFields_, null);
};
goog.inherits(proto.goods_admin.QueryOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goods_admin.QueryOrderResponse.displayName = 'proto.goods_admin.QueryOrderResponse';
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
proto.goods_admin.QueryOrderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.goods_admin.QueryOrderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goods_admin.QueryOrderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goods_admin.QueryOrderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    order: (f = msg.getOrder()) && common_pb.Order.toObject(includeInstance, f)
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
 * @return {!proto.goods_admin.QueryOrderRequest}
 */
proto.goods_admin.QueryOrderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goods_admin.QueryOrderRequest;
  return proto.goods_admin.QueryOrderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goods_admin.QueryOrderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goods_admin.QueryOrderRequest}
 */
proto.goods_admin.QueryOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.Order;
      reader.readMessage(value,common_pb.Order.deserializeBinaryFromReader);
      msg.setOrder(value);
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
proto.goods_admin.QueryOrderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goods_admin.QueryOrderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goods_admin.QueryOrderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goods_admin.QueryOrderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrder();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.Order.serializeBinaryToWriter
    );
  }
};


/**
 * optional Order order = 1;
 * @return {?proto.goods_admin.Order}
 */
proto.goods_admin.QueryOrderRequest.prototype.getOrder = function() {
  return /** @type{?proto.goods_admin.Order} */ (
    jspb.Message.getWrapperField(this, common_pb.Order, 1));
};


/**
 * @param {?proto.goods_admin.Order|undefined} value
 * @return {!proto.goods_admin.QueryOrderRequest} returns this
*/
proto.goods_admin.QueryOrderRequest.prototype.setOrder = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goods_admin.QueryOrderRequest} returns this
 */
proto.goods_admin.QueryOrderRequest.prototype.clearOrder = function() {
  return this.setOrder(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goods_admin.QueryOrderRequest.prototype.hasOrder = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.goods_admin.QueryOrderResponse.repeatedFields_ = [2];



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
proto.goods_admin.QueryOrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.goods_admin.QueryOrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goods_admin.QueryOrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goods_admin.QueryOrderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    baseResp: (f = msg.getBaseResp()) && common_pb.BaseResp.toObject(includeInstance, f),
    orderListList: jspb.Message.toObjectList(msg.getOrderListList(),
    common_pb.Order.toObject, includeInstance)
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
 * @return {!proto.goods_admin.QueryOrderResponse}
 */
proto.goods_admin.QueryOrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goods_admin.QueryOrderResponse;
  return proto.goods_admin.QueryOrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goods_admin.QueryOrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goods_admin.QueryOrderResponse}
 */
proto.goods_admin.QueryOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.BaseResp;
      reader.readMessage(value,common_pb.BaseResp.deserializeBinaryFromReader);
      msg.setBaseResp(value);
      break;
    case 2:
      var value = new common_pb.Order;
      reader.readMessage(value,common_pb.Order.deserializeBinaryFromReader);
      msg.addOrderList(value);
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
proto.goods_admin.QueryOrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goods_admin.QueryOrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goods_admin.QueryOrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goods_admin.QueryOrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBaseResp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.BaseResp.serializeBinaryToWriter
    );
  }
  f = message.getOrderListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      common_pb.Order.serializeBinaryToWriter
    );
  }
};


/**
 * optional BaseResp base_resp = 1;
 * @return {?proto.goods_admin.BaseResp}
 */
proto.goods_admin.QueryOrderResponse.prototype.getBaseResp = function() {
  return /** @type{?proto.goods_admin.BaseResp} */ (
    jspb.Message.getWrapperField(this, common_pb.BaseResp, 1));
};


/**
 * @param {?proto.goods_admin.BaseResp|undefined} value
 * @return {!proto.goods_admin.QueryOrderResponse} returns this
*/
proto.goods_admin.QueryOrderResponse.prototype.setBaseResp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goods_admin.QueryOrderResponse} returns this
 */
proto.goods_admin.QueryOrderResponse.prototype.clearBaseResp = function() {
  return this.setBaseResp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goods_admin.QueryOrderResponse.prototype.hasBaseResp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Order order_list = 2;
 * @return {!Array<!proto.goods_admin.Order>}
 */
proto.goods_admin.QueryOrderResponse.prototype.getOrderListList = function() {
  return /** @type{!Array<!proto.goods_admin.Order>} */ (
    jspb.Message.getRepeatedWrapperField(this, common_pb.Order, 2));
};


/**
 * @param {!Array<!proto.goods_admin.Order>} value
 * @return {!proto.goods_admin.QueryOrderResponse} returns this
*/
proto.goods_admin.QueryOrderResponse.prototype.setOrderListList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.goods_admin.Order=} opt_value
 * @param {number=} opt_index
 * @return {!proto.goods_admin.Order}
 */
proto.goods_admin.QueryOrderResponse.prototype.addOrderList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.goods_admin.Order, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.goods_admin.QueryOrderResponse} returns this
 */
proto.goods_admin.QueryOrderResponse.prototype.clearOrderListList = function() {
  return this.setOrderListList([]);
};


goog.object.extend(exports, proto.goods_admin);
