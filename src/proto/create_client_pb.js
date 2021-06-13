// source: create_client.proto
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
goog.exportSymbol('proto.goods.CreateClientRequest', null, global);
goog.exportSymbol('proto.goods.CreateClientResponse', null, global);
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
proto.goods.CreateClientRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goods.CreateClientRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goods.CreateClientRequest.displayName = 'proto.goods.CreateClientRequest';
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
proto.goods.CreateClientResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.goods.CreateClientResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.goods.CreateClientResponse.displayName = 'proto.goods.CreateClientResponse';
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
proto.goods.CreateClientRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.goods.CreateClientRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goods.CreateClientRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goods.CreateClientRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    client: (f = msg.getClient()) && common_pb.Client.toObject(includeInstance, f)
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
 * @return {!proto.goods.CreateClientRequest}
 */
proto.goods.CreateClientRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goods.CreateClientRequest;
  return proto.goods.CreateClientRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goods.CreateClientRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goods.CreateClientRequest}
 */
proto.goods.CreateClientRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_pb.Client;
      reader.readMessage(value,common_pb.Client.deserializeBinaryFromReader);
      msg.setClient(value);
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
proto.goods.CreateClientRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goods.CreateClientRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goods.CreateClientRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goods.CreateClientRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClient();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.Client.serializeBinaryToWriter
    );
  }
};


/**
 * optional Client client = 1;
 * @return {?proto.goods.Client}
 */
proto.goods.CreateClientRequest.prototype.getClient = function() {
  return /** @type{?proto.goods.Client} */ (
    jspb.Message.getWrapperField(this, common_pb.Client, 1));
};


/**
 * @param {?proto.goods.Client|undefined} value
 * @return {!proto.goods.CreateClientRequest} returns this
*/
proto.goods.CreateClientRequest.prototype.setClient = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goods.CreateClientRequest} returns this
 */
proto.goods.CreateClientRequest.prototype.clearClient = function() {
  return this.setClient(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goods.CreateClientRequest.prototype.hasClient = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.goods.CreateClientResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.goods.CreateClientResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.goods.CreateClientResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goods.CreateClientResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    baseResp: (f = msg.getBaseResp()) && common_pb.BaseResp.toObject(includeInstance, f)
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
 * @return {!proto.goods.CreateClientResponse}
 */
proto.goods.CreateClientResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.goods.CreateClientResponse;
  return proto.goods.CreateClientResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.goods.CreateClientResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.goods.CreateClientResponse}
 */
proto.goods.CreateClientResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.goods.CreateClientResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.goods.CreateClientResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.goods.CreateClientResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.goods.CreateClientResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBaseResp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_pb.BaseResp.serializeBinaryToWriter
    );
  }
};


/**
 * optional BaseResp base_resp = 1;
 * @return {?proto.goods.BaseResp}
 */
proto.goods.CreateClientResponse.prototype.getBaseResp = function() {
  return /** @type{?proto.goods.BaseResp} */ (
    jspb.Message.getWrapperField(this, common_pb.BaseResp, 1));
};


/**
 * @param {?proto.goods.BaseResp|undefined} value
 * @return {!proto.goods.CreateClientResponse} returns this
*/
proto.goods.CreateClientResponse.prototype.setBaseResp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.goods.CreateClientResponse} returns this
 */
proto.goods.CreateClientResponse.prototype.clearBaseResp = function() {
  return this.setBaseResp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.goods.CreateClientResponse.prototype.hasBaseResp = function() {
  return jspb.Message.getField(this, 1) != null;
};


goog.object.extend(exports, proto.goods);