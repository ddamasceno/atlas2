/*jshint esversion: 6 */
import Dispatcher from './dispatcher';
var Constants = require('./constants');

export default class Actions {

  static openNewWorkspaceDialog() {
    Dispatcher.dispatch({actionType: Constants.ACTION_TYPES.WORKSPACE_OPEN_NEW_WORKSPACE_DIALOG});
  }

  static closeNewWorkspaceDialog() {
    Dispatcher.dispatch({actionType: Constants.ACTION_TYPES.WORKSPACE_CLOSE_NEW_WORKSPACE_DIALOG});
  }

  static submitNewWorkspaceDialog(newWorkspaceData) {
    Dispatcher.dispatch({actionType: Constants.ACTION_TYPES.WORKSPACE_SUBMIT_NEW_WORKSPACE_DIALOG, data: newWorkspaceData});
  }

  static openNewMapDialog() {
    Dispatcher.dispatch({actionType: Constants.ACTION_TYPES.MAP_OPEN_NEW_WORKSPACE_DIALOG});
  }

  static closeNewMapDialog() {
    Dispatcher.dispatch({actionType: Constants.ACTION_TYPES.MAP_CLOSE_NEW_WORKSPACE_DIALOG});
  }

  static submitEditNewMapDialog(data) {
    Dispatcher.dispatch({actionType: Constants.ACTION_TYPES.MAP_CLOSE_SUBMIT_EDIT_WORKSPACE_DIALOG, data: data});
  }

  static palletteDragStarted() {
    Dispatcher.dispatch({actionType: Constants.ACTION_TYPES.PALETTE_DRAG_STARTED});
  }
  static palletteDragStopped(type, data) {
    Dispatcher.dispatch({actionType: Constants.ACTION_TYPES.PALETTE_DRAG_STOPPED, type: type, data: data});
  }
  static canvasResized(data) {
    Dispatcher.dispatch({actionType: Constants.ACTION_TYPES.CANVAS_RESIZED, data: data});
  }

  static closeNewNodeDialog() {
    Dispatcher.dispatch({actionType: Constants.ACTION_TYPES.MAP_CLOSE_NEW_NODE_DIALOG});
  }
  static newNodeCreated(data) {
    Dispatcher.dispatch({actionType: Constants.ACTION_TYPES.MAP_CLOSE_SUBMIT_NEW_NODE_DIALOG, data: data});
  }

  static deduplicatorUnassignedComponentDragStarted() {
    Dispatcher.dispatch({actionType: Constants.ACTION_TYPES.DEDUPLICATOR_UNASSIGNED_COMPONENT_DRAG_STARTED});
  }

  static deduplicatorUnassignedComponentDragStopped() {
    Dispatcher.dispatch({actionType: Constants.ACTION_TYPES.DEDUPLICATOR_UNASSIGNED_COMPONENT_DRAG_STOPPED});
  }

  static focusNode(nodeID) {
    Dispatcher.dispatch({actionType: Constants.ACTION_TYPES.CANVAS_FOCUS_NODE, data: nodeID});
  }

  static blurNodes(nodeID) {
    Dispatcher.dispatch({actionType: Constants.ACTION_TYPES.CANVAS_BLUR_NODES});
  }

  static nodeDragged(mapID, nodeID, newPos) {
    Dispatcher.dispatch({
      actionType: Constants.ACTION_TYPES.CANVAS_NODE_DRAGGED,
      data: {
        mapID: mapID,
        nodeID: nodeID,
        newPos: newPos
      }
    });
  }
}
