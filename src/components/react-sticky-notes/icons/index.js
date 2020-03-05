import { h, getElementStyle } from './../utils';
const iconsClassName = "material-icons";
export const add = h('i',{ className: 'icons-y', style: {fontSize: 30, fontFamily: 'helvetica', color: 'grey', fontStyle: 'normal', paddingLeft: 10}},'+');
export const addG = h('i',{ className: "icons-g", style: {fontSize: 30, fontFamily: 'helvetica', color: 'grey', fontStyle: 'normal', paddingLeft: 10} },'+');
export const addR = h('i',{ className: "icons-r", style: {fontSize: 30, fontFamily: 'helvetica', color: 'grey', fontStyle: 'normal', paddingLeft: 10} },'+');
export const addB = h('i',{ className: "icons-b", style: {fontSize: 30, fontFamily: 'helvetica', color: 'grey', fontStyle: 'normal', paddingLeft: 10} },'+');
export const trash = h('i',{ className: iconsClassName, style: getElementStyle('icon') },'delete_outlined');
export const menu = h('i',{ className: iconsClassName, style: getElementStyle('icon') },'more_horiz');
export const hide = h('i',{ className: iconsClassName, style: getElementStyle('icon') },'visibility_off');
export const show = h('i',{ className: iconsClassName, style: getElementStyle('icon') },'minimize');
export const normalview = h('i',{ className: iconsClassName, style: getElementStyle('icon') },'widgets');
