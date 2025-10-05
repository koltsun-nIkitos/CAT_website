"use strict";

import {swipers} from "./swipers.js";
import { accordions } from "./accordions.js";
import { copyright } from "./copyright.js";
import { burgerMenu } from "./burger-menu.js";
import { smoothHyperScroll } from './smoothHyperScroll.js';


burgerMenu(); // мобильное меню
swipers(); // слайдеры 
copyright(); // copyright
accordions(); // аккордионы
smoothHyperScroll(); // плавные гипер скроллы

