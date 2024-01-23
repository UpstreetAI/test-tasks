import * as THREE from 'three';

import {PositionInterpolant} from './interpolants.js';

const position = new THREE.Vector3();
const lastPosition = new THREE.Vector3();
const localArray3 = new Float32Array(3);

const avatarInterpolationFrameRate = 60;
const avatarInterpolationTimeDelay = 1000 / (avatarInterpolationFrameRate * 0.5);
const avatarInterpolationNumFrames = 4;

const positionInterpolant = new PositionInterpolant(() => getPosition(), avatarInterpolationTimeDelay, avatarInterpolationNumFrames);

function getPosition() {
    return position.toArray(localArray3);
}

function updateInterpolation(timeDiff) {
    positionInterpolant.update(timeDiff);
}

function updatePosition(position, timeDiff){
    lastPosition.copy(position);
    position.fromArray(position);
    positionInterpolant.snapshot(timeDiff);
}

// TODO: your code here
// NOTE: the above code was extracted from the Remote Player in the Upstreet main app -- this is here to help you with the API but is not guaranteed to be correct