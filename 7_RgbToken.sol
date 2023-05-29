// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol";

contract rgbToken is ERC20PresetMinterPauser {
    constructor() ERC20PresetMinterPauser("rgbToken", "RGBT") {
    }
}