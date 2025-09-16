import React, { useEffect, useState } from "react";
import styles from "./src/FlowerAura.module.css";
import { Step, Stepper, StepLabel } from "@mui/material";
import { produce } from "immer";
import { DeleteRounded } from "@mui/icons-material";
import { ArrowDropDown, ArrowDropUp, ArrowBackIosNew } from "@mui/icons-material";
import { toast } from "react-toastify";
import ga4 from "react-ga4";
// Replaced missing SVG with MUI icon for compatibility

const data = {
	60523: [
		{
			label: "Rakhi",
			categories: [
				{
					label: "Rakhi",
					title: "Select your Rakhi",
					minimumQuantity: 1,
					maximumQuantity: 10,
					products: [
						{
							ProductName: "Red And Gold Kundan Rakhi",
							Category: "Single",
							AttributeID: 65,
							Price: 195,
							ImageUrl:
								"https://imgcdn.floweraura.com/red-gold-and-pearl-rakhi-9887187ra-A.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Best Bro Trophy Rakhi",
							Category: "Single",
							AttributeID: 66,
							Price: 225,
							ImageUrl:
								"https://imgcdn.floweraura.com/best-bro-trophy-rakhi-9779437ra-A.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Bhaiya Bhabhi Pearl Rakhi with Metallic Beads",
							Category: "Bhaiya bhabhi",
							AttributeID: 112,
							Price: 145,
							ImageUrl:
								"https://imgcdn.floweraura.com/Rak-22-5212-A.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Alluring Beaded Bhaiya Bhabhi Rakhi Set",
							Category: "Bhaiya bhabhi",
							AttributeID: 111,
							Price: 195,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_5501.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Vibrant Coolest Bro Rakhi",
							Category: "Kids",
							AttributeID: 107,
							Price: 115,
							ImageUrl:
								"https://imgcdn.floweraura.com/vibrant-coolest-bro-rakhi-9768707ra-A_0.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Embellished Rakhi Trio",
							Category: "Set of 3",
							AttributeID: 74,
							Price: 245,
							ImageUrl:
								"https://imgcdn.floweraura.com/embellished-rakhi-trio-9849707ra-A.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Embellished Peacock Charm Rakhis",
							Category: "Set of 2",
							AttributeID: 73,
							Price: 245,
							ImageUrl:
								"https://imgcdn.floweraura.com/embellished-peacock-charm-rakhis-9778547ra-A.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Traditional Handpainted Charm Rakhi Duo",
							Category: "Set of 2",
							AttributeID: 71,
							Price: 265,
							ImageUrl:
								"https://imgcdn.floweraura.com/traditional-handpainted-charm-rakhi-duo-9779317ra-A.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Flower Dial Trinket Rakhi",
							Category: "Single",
							AttributeID: 69,
							Price: 215,
							ImageUrl:
								"https://imgcdn.floweraura.com/flower-dial-trinket-rakhi-9814727ra-A.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Metal Embellished Mauli Rakhi",
							Category: "Single",
							AttributeID: 68,
							Price: 175,
							ImageUrl:
								"https://imgcdn.floweraura.com/metal-embellished-mauli-rakhi-9814737ra-A.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Radiant Mor Pankh Mirror Rakhi",
							Category: "Single",
							AttributeID: 67,
							Price: 205,
							ImageUrl:
								"https://imgcdn.floweraura.com/radiant-mor-pankh-mirror-rakhi-9779327ra-A.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Heroic Captain America Shield Rakhi",
							Category: "Kids",
							AttributeID: 109,
							Price: 250,
							ImageUrl:
								"https://imgcdn.floweraura.com/heroic-captain-america-shield-rakhi-ven-38-kc786534-A_0.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Spiderman Rakhi For Kids",
							Category: "Kids",
							AttributeID: 108,
							Price: 175,
							ImageUrl:
								"https://imgcdn.floweraura.com/rak-21-4777-A.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Quirky Football Rakhi",
							Category: "Kids",
							AttributeID: 110,
							Price: 215,
							ImageUrl:
								"https://imgcdn.floweraura.com/Rak-22-5127-A_0.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Designer Bhaiya Bhabhi Rakhi Set",
							Category: "Bhaiya bhabhi",
							AttributeID: 116,
							Price: 245,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_5497.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName:
								"Exquisite N Antique Charm Om Rudraksha N Pearl Rakhi",
							Category: "Single",
							AttributeID: 117,
							Price: 145,
							ImageUrl:
								"https://imgcdn.floweraura.com/Rak-22-5203-B.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Two Shiva N Damru Rakhis",
							Category: "Set of 2",
							AttributeID: 118,
							Price: 265,
							ImageUrl:
								"https://imgcdn.floweraura.com/two-shiva-n-damru-rakhis-9779227ra-B_1.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Silver Finish Fancy Bhaiya Bhabhi Rakhi",
							Category: "Bhaiya bhabhi",
							AttributeID: 119,
							Price: 225,
							ImageUrl: "https://imgcdn.floweraura.com/IMG_5514.jpg",
						},
						{
							ProductName: "Traditional Mirror Rakhi For Couple",
							Category: "Bhaiya bhabhi",
							AttributeID: 120,
							Price: 245,
							ImageUrl:
								"https://imgcdn.floweraura.com/mirror-dial-couple-rakhi-set-9778427ra-B_0.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Handpainted Floral Rakhi Duo",
							Category: "Set of 2",
							AttributeID: 121,
							Price: 245,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_5469.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
					],
				},
			],
		},
		{
			label: "Eatables",
			categories: [
				{
					label: "Eatables",
					title: "Select your Eatables",
					minimumQuantity: 1,
					maximumQuantity: 6,
					products: [
						{
							ProductName: "Haldiram Kaju Katli 200 gm",
							Category: "Sweet",
							AttributeID: 64,
							Price: 395,
							ImageUrl:
								"https://imgcdn.floweraura.com/17-A_1.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Haldiram Milk cake 250 gm",
							Category: "Sweet",
							AttributeID: 50,
							Price: 349,
							ImageUrl:
								"https://imgcdn.floweraura.com/29-A.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},


						{
							ProductName: "2 Hersheys small - golden - almond",
							Category: "Chocolate",
							AttributeID: 98,
							Price: 199,
							ImageUrl:
								"https://imgcdn.floweraura.com/23-A-Recovered.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "2 Hersheys small - blueberry & acai",
							Category: "Chocolate",
							AttributeID: 48,
							Price: 199,
							ImageUrl:
								"https://imgcdn.floweraura.com/9-A-Recovered.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Almond Rocks 100 gms",
							Category: "Chocolate",
							AttributeID: 61,
							Price: 199,
							ImageUrl:
								"https://imgcdn.floweraura.com/bakingo-chocolate-hazelnut-rocks-100-gms-9785960ad-AA.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "BK Hazelnut rocks",
							Category: "Chocolate",
							AttributeID: 88,
							Price: 225,
							ImageUrl:
								"https://imgcdn.floweraura.com/7-A-Recovered_1.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Trail Mix pouch",
							Category: "Dry Fruits",
							AttributeID: 89,
							Price: 175,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_0763%20(1).JPG?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Haldiram Motichoor laddoo- 250gm",
							Category: "Sweet",
							AttributeID: 104,
							Price: 395,
							ImageUrl:
								"https://imgcdn.floweraura.com/27-A.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Om Dhoda Burfi 250gm",
							Category: "Sweet",
							AttributeID: 90,
							Price: 295,
							ImageUrl:
								"https://imgcdn.floweraura.com/Dhoda%20Burfi%20250gm.JPG?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Om Atta Ladoo 250gm",
							Category: "Sweet",
							AttributeID: 91,
							Price: 295,
							ImageUrl:
								"https://imgcdn.floweraura.com/14-A_2.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Om Special Patisa 250gm",
							Category: "Sweet",
							AttributeID: 92,
							Price: 245,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_0671.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Assorted Baklava 9 Pcs",
							Category: "Sweet",
							AttributeID: 63,
							Price: 625,
							ImageUrl:
								"https://imgcdn.floweraura.com/4-A_7.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Almonds N Cashews In Potli 100gm",
							Category: "Sweet",
							AttributeID: 114,
							Price: 495,
							ImageUrl:
								"https://imgcdn.floweraura.com/10-A_1.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Bakingo Choco N Almond Cookies Combo",
							Category: "Sweet",
							AttributeID: 115,
							Price: 449,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_2914-Edited.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
					],
				},
			],
		},
		{
			label: "Gifts",
			categories: [
				{
					label: "Gifts",
					title: "Select your Gifts",
					minimumQuantity: 0,
					maximumQuantity: 3,
					products: [
						{
							ProductName: "Diary & Pen Combo",
							Category: "Gift",
							AttributeID: 78,
							Price: 495,
							ImageUrl:
								"https://imgcdn.floweraura.com/premium-notebook-and-pen-set-9804857ad-AA.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Elegant Blue Pooja Thali",
							Category: "Gift",
							AttributeID: 79,
							Price: 190,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_0742_0.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Ganesha Keychain",
							Category: "Gift",
							AttributeID: 80,
							Price: 99,
							ImageUrl:
								"https://imgcdn.floweraura.com/9773137ra-E.JPG?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Best Bro Mug",
							Category: "Gift",
							AttributeID: 81,
							Price: 245,
							ImageUrl:
								"https://imgcdn.floweraura.com/9773137ra-D_0.JPG?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "A5 Photo frame",
							Category: "Gift",
							AttributeID: 82,
							Price: 149,
							ImageUrl:
								"https://imgcdn.floweraura.com/DSC_4178.JPG?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Ganesha Idol",
							Category: "Gift",
							AttributeID: 84,
							Price: 199,
							ImageUrl:
								"https://imgcdn.floweraura.com/9773127ra-C.JPG?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Rose & Black oud Scented Candle",
							Category: "Gift",
							AttributeID: 85,
							Price: 399,
							ImageUrl:
								"https://imgcdn.floweraura.com/rose-&-black-oud-scented-candle-9787190gf.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Jasmine Marigold Fragrance Reed Diffuser",
							Category: "Gift",
							AttributeID: 86,
							Price: 475,
							ImageUrl:
								"https://imgcdn.floweraura.com/jasmine-marigold-fragrance-reed-diffuser-9778800sd-A_0.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
					],
				},
			],
		},
		{
			label: "Cards",
			categories: [
				{
					label: "Cards",
					title: "Select your Free Card",
					minimumQuantity: 0,
					maximumQuantity: 1,
					products: [
						{
							ProductName: "Rakhi Wishes Card",
							Category: "Free Card",
							AttributeID: 94,
							Price: 0,
							ImageUrl:
								"https://imgcdn.floweraura.com/DSC_3434.JPG?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Rakhi Quotes Card",
							Category: "Free Card",
							AttributeID: 95,
							Price: 0,
							ImageUrl:
								"https://imgcdn.floweraura.com/DSC_3437.JPG?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Happy Rakhi Card",
							Category: "Free Card",
							AttributeID: 96,
							Price: 0,
							ImageUrl:
								"https://imgcdn.floweraura.com/DSC_3439.JPG?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Tum Hi Ho Card",
							Category: "Free Card",
							AttributeID: 97,
							Price: 0,
							ImageUrl:
								"https://imgcdn.floweraura.com/DSC_3440.JPG?tr=w-298,h-298,dpr-1.5,q-70",
						},
					],
				},
				{
					label: "Boxes",
					title: "Select your box",
					subtitle: "Box size may vary as per selected items",
					minimumQuantity: 1,
					maximumQuantity: 1,
					products: [
						{
							ProductName: " 1 Gift box",
							Category: "Box",
							AttributeID: 93,
							Price: 99,
							ImageUrl:
								"https://imgcdn.floweraura.com/DSC_3427.JPG?tr=w-298,h-298,dpr-1.5,q-70",


							disable_delete: true,
						},
					],
				},
			],
		},
	],
	61723: [
		{
			label: "Eatables",
			priority: 0,
			categories: [
				{
					label: "Eatables",
					title: "Select from Eatables",
					priority: 0,
					minimumQuantity: 1,
					maximumQuantity: 10,
					products: [
						{
							ProductName: "Kaju Katli 200 gm",
							Category: "Sweet",
							AttributeID: 64,
							Price: 395,
							ImageUrl:
								"https://imgcdn.floweraura.com/17-A_1.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Hersheys small - golden - almond",
							Category: "Chocolate",
							AttributeID: 98,
							Price: 199,
							ImageUrl:
								"https://imgcdn.floweraura.com/23-A_3.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Kanha Moong Barfi 250gm",
							Category: "Sweet",
							AttributeID: 150,
							Price: 130,
							ImageUrl:
								"https://imgcdn.floweraura.com/4-B_37.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},


						{
							ProductName: "BK almond Rocks",
							Category: "Chocolate",
							AttributeID: 61,
							Price: 199,
							ImageUrl:
								"https://imgcdn.floweraura.com/bakingo-chocolate-hazelnut-rocks-100-gms-9785960ad-AA.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Hersheys small - blueberry & acai",
							Category: "Chocolate",
							AttributeID: 48,
							Price: 199,
							ImageUrl:
								"https://imgcdn.floweraura.com/9-A-Recovered.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},


						{
							ProductName: "BK Hazelnut rocks",
							Category: "Chocolate",
							AttributeID: 88,
							Price: 225,
							ImageUrl:
								"https://imgcdn.floweraura.com/7-A-Recovered_1.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Assorted Dryfruit Ladoo 4 pcs",
							Category: "Sweet",
							AttributeID: 148,
							Price: 449,
							ImageUrl:
								"https://imgcdn.floweraura.com/1-C_116.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Set of 2 Chocolate Dragees",
							Category: "Chocolate",
							AttributeID: 60,
							Price: 395,
							ImageUrl:
								"https://imgcdn.floweraura.com/3-B_56.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Classic Multigrain",
							Category: "Dry Fruits",
							AttributeID: 141,
							Price: 99,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_0926.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Om Special Patisa 250gm",
							Category: "Sweet",
							AttributeID: 92,
							Price: 245,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_0671.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},


						{
							ProductName: "Panjiri Laddo 250gm",
							Category: "Sweet",
							AttributeID: 146,
							Price: 249,
							ImageUrl:
								"https://imgcdn.floweraura.com/panjiri-laddo-250gm-99130150ad-BBB.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Assorted Baklava 4 Pcs",
							Category: "Sweet",
							AttributeID: 149,
							Price: 399,
							ImageUrl:
								"https://imgcdn.floweraura.com/6-C_11.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},


						{
							ProductName: "Haldiram Rasgulla 500gm",
							Category: "Sweet",
							AttributeID: 145,
							Price: 130,
							ImageUrl:
								" https://imgcdn.floweraura.com/IMG_0720_2.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						// {
						//  ProductName: "BBQ Almonds",
						//  Category: "Dry Fruits",
						//  AttributeID: 140,
						//  Price: 175,
						//  ImageUrl:
						//      "https://imgcdn.floweraura.com/DSC_7447-Edited.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						// },


						{
							ProductName: "Trail Mix pouch",
							Category: "Dry Fruits",
							AttributeID: 89,
							Price: 175,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_0763%20(1).JPG?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Paan Raisin",
							Category: "Dry Fruits",
							AttributeID: 142,
							Price: 99,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_0924%20(1).jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Quinoa Millets",
							Category: "Dry Fruits",
							AttributeID: 143,
							Price: 99,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_0929_0.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Set of 3 Chocolate Dragees",
							Category: "Chocolate",
							AttributeID: 144,
							Price: 745,
							ImageUrl:
								"https://imgcdn.floweraura.com/2-B_27.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
					],
				},
			],
		},
		{
			label: "Gifts",
			priority: 2,
			categories: [
				{
					label: "Gifts",
					title: "Select your Gifts",
					priority: 2,
					minimumQuantity: 0,
					maximumQuantity: 10,
					products: [
						{
							ProductName: "Diwali Greeting Card",
							Category: "Gift",
							AttributeID: 132,
							Price: 350,
							ImageUrl:
								"https://imgcdn.floweraura.com/heartfelt-happy-diwali-greeting-card-9799887gf-A_0.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Nok Jhok Rakhi Mug",
							Category: "Gift",
							AttributeID: 169,
							Price: 180,
							ImageUrl:
								"https://imgcdn.floweraura.com/nok-jhok-rakhi-mug-9809077ad.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Most Handsome Bhai Cushion",
							Category: "Gift",
							AttributeID: 171,
							Price: 295,
							ImageUrl:
								"https://imgcdn.floweraura.com/12x12-inches-cushion-9806487ad-A.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Designed Shot Glass Duo",
							Category: "Gift",
							AttributeID: 134,
							Price: 550,
							ImageUrl:
								"https://imgcdn.floweraura.com/designed-shot-glass-duo-9831797gf-A_0.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Rose & Black oud Scented Candle",
							Category: "Gift",
							AttributeID: 85,
							Price: 399,
							ImageUrl:
								"https://imgcdn.floweraura.com/rose-&-black-oud-scented-candle-9787190gf.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Vintage Floral Beverage Mug",
							Category: "Gift",
							AttributeID: 135,
							Price: 345,
							ImageUrl:
								"https://imgcdn.floweraura.com/vintage-floral-beverage-mug-9784157gf-A_0.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},


						{
							ProductName: "Diary & Pen Combo",
							Category: "Gift",
							AttributeID: 78,
							Price: 495,
							ImageUrl:
								"https://imgcdn.floweraura.com/premium-notebook-and-pen-set-9804857ad-AA.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},


						{
							ProductName: "Cartoon Animals Yellow Mug",
							Category: "Gift",
							AttributeID: 170,
							Price: 175,
							ImageUrl:
								"https://imgcdn.floweraura.com/cartoon-animals-yellow-mug-9804317ad-A.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Jasmine Marigold Fragrance Reed Diffuser",
							Category: "Gift",
							AttributeID: 86,
							Price: 475,
							ImageUrl:
								"https://imgcdn.floweraura.com/jasmine-marigold-fragrance-reed-diffuser-9778800sd-A_0.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "French Lavender Scented Oil Burner",
							Category: "Candle",
							AttributeID: 136,
							Price: 575,
							ImageUrl:
								"https://imgcdn.floweraura.com/french-lavender-scented-oil-burner-9778780sd-A_0.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
					],
				},
			],
		},
		{
			label: "Festival Specials",
			priority: 1,
			categories: [
				{
					label: "Festival Specials",
					title: "Select from Festival Specials",
					priority: 1,
					minimumQuantity: 0,
					maximumQuantity: 10,
					products: [
						{
							ProductName: "Laxmi Ganesha Brass Idols",
							Category: "Idols",
							AttributeID: 125,
							Price: 675,
							ImageUrl:
								"https://imgcdn.floweraura.com/7-B_25.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Pearl Pooja Thali",
							Category: "Thali",
							AttributeID: 79,
							Price: 190,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_0742_0.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Terracotta Lakshmi Ganesha",
							Category: "Idols",
							AttributeID: 126,
							Price: 790,
							ImageUrl:
								"https://imgcdn.floweraura.com/12-A_10.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						// {
						//  ProductName: "Antique Swastik Diya Duo",
						//  Category: "Diya Tea light",
						//  AttributeID: 127,
						//  Price: 495,
						//  ImageUrl:
						//      "https://imgcdn.floweraura.com/golden-pearl-votive-diya-set-of-two-9762977gf-A_0.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						// },
						{
							ProductName: "Golden Pearl Votive Diya Set Of Two",
							Category: "Diya Tea light",
							AttributeID: 128,
							Price: 145,
							ImageUrl:
								"https://imgcdn.floweraura.com/golden-pearl-votive-diya-set-of-two-9762977gf-B_0.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Beautiful Pooja Thali",
							Category: "Thali",
							AttributeID: 172,
							Price: 190,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_0750.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Golden Ghungru Bells Votive Diyas",
							Category: "Diya Tea light",
							AttributeID: 129,
							Price: 145,
							ImageUrl:
								"https://imgcdn.floweraura.com/golden-ghungru-bells-votive-diyas-9762987gf-B_0.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Pearl Glow Diwali Diya Candle Set",
							Category: "Diya Tea light",
							AttributeID: 137,
							Price: 295,
							ImageUrl:
								"https://imgcdn.floweraura.com/pearl-glow-diwali-diya-candle-set-9763047gf-B_0.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Elegant Blue Pooja Thali",
							Category: "Thali",
							AttributeID: 173,
							Price: 190,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_0740.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Majestic Tulsi Wax Diya",
							Category: "Diya Tea light",
							AttributeID: 138,
							Price: 255,
							ImageUrl:
								"https://imgcdn.floweraura.com/majestic-tulsi-wax-diyas-9834857gf-A_0.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Decorative Evil Eye Pearl Tealight Set",
							Category: "Diya Tea light",
							AttributeID: 139,
							Price: 595,
							ImageUrl:
								"https://imgcdn.floweraura.com/decorative-evil-eye-pearl-tealight-set-9763007gf-A_0.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
					],
				},
			],
		},
		{
			label: "Boxes",
			priority: 3,
			categories: [
				{
					label: "Boxes",
					title: "Select your box",
					priority: 3,
					minimumQuantity: 1,
					maximumQuantity: 1,
					products: [
						{
							ProductName: "Festive Cardboard box",
							Category: "Box",
							AttributeID: 93,
							Price: 99,
							ImageUrl:
								"https://imgcdn.floweraura.com/DSC_3598.JPG?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Designer Metallic Basket",
							Category: "Box",
							AttributeID: 131,
							Price: 350,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_6261.JPG?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Handmade Net Basket",
							Category: "Box",
							AttributeID: 147,
							Price: 299,
							ImageUrl:
								"https://imgcdn.floweraura.com/DSC_3590.JPG?tr=w-298,h-298,dpr-1.5,q-70",
						},
					],
				},
			],
		},
	],
	62523: [
		{
			label: "Eatables",
			priority: 0,
			categories: [
				{
					label: "Eatables",
					title: "Select from Eatables",
					priority: 0,
					minimumQuantity: 1,
					maximumQuantity: 10,
					products: [


						{
							ProductName: "Dryfruit Gajjak Roll 200Gm",
							Category: "Gajjak",
							AttributeID: 195,
							Price: 250,
							ImageUrl: "https://imgcdn.floweraura.com/dryfruit-gajjak-roll-200gm-9754387a.jpg",
						},


						{
							ProductName: "Gur Khasta Gajjak 250Gm",
							Category: "Gajjak",
							AttributeID: 196,
							Price: 299,
							ImageUrl: "https://imgcdn.floweraura.com/gur-khasta-gajjak-250gm-9754377ad.jpg",
						},


						{
							ProductName: "Dryfruit Agra Gajak 200Gm",
							Category: "Gajjak",
							AttributeID: 197,
							Price: 250,
							ImageUrl: "https://imgcdn.floweraura.com/dryfruit-agra-gajak-200gm-9754367ad.jpg",
						},


						{
							ProductName: "Peanut Chikki 300Gm",
							Category: "Gajjak",
							AttributeID: 198,
							Price: 225,
							ImageUrl: "https://imgcdn.floweraura.com/peanut-chikki-300gm-9754357ad.jpg",
						},


						{
							ProductName: "Special Gur Rewri 250Gm",
							Category: "Gajjak",
							AttributeID: 199,
							Price: 250,
							ImageUrl: "https://imgcdn.floweraura.com/special-gur-rewri-250gm-9754347ad.jpg",
						},






						{
							ProductName: "Plum Cake 100 Gm",
							Category: "Plum Cake",
							AttributeID: 176,
							Price: 149,
							ImageUrl: "https://bkmedia.bakingo.com/dry-fruit-plum-cake-100-gms-cake3128plum-AA.jpg",
						},



						{
							ProductName: "Hersheys small - golden - almond",
							Category: "Chocolate",
							AttributeID: 98,
							Price: 199,
							ImageUrl:
								"https://imgcdn.floweraura.com/23-A_3.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Plum Cake 250 Gm",
							Category: "Plum Cake",
							AttributeID: 175,
							Price: 299,
							ImageUrl:
								"https://bkmedia.bakingo.com/plum-licious-christmas-tree-cake0164plum-BBBB.jpg",
						},




						{
							ProductName: "BK almond Rocks",
							Category: "Chocolate",
							AttributeID: 61,
							Price: 199,
							ImageUrl:
								"https://imgcdn.floweraura.com/bakingo-chocolate-hazelnut-rocks-100-gms-9785960ad-AA.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},





						{
							ProductName: "BK Hazelnut rocks",
							Category: "Chocolate",
							AttributeID: 88,
							Price: 225,
							ImageUrl:
								"https://imgcdn.floweraura.com/7-A-Recovered_1.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},

						{
							ProductName: "Set of 2 Chocolate Dragees",
							Category: "Chocolate",
							AttributeID: 60,
							Price: 395,
							ImageUrl:
								"https://imgcdn.floweraura.com/3-B_56.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "16 Ferrero Rocher Chocolates",
							Category: "Chocolate",
							AttributeID: 99,
							Price: 899,
							ImageUrl:
								"https://imgcdn.floweraura.com/DSC_5557.jpg",
						},
						{
							ProductName: "Set Of 2 Temptation Chocolates",
							Category: "Chocolate",
							AttributeID: 100,
							Price: 345,
							ImageUrl:
								"https://imgcdn.floweraura.com/rakhi-attributes/setof-2-temptation-chocolate.jpg",
						},
						{
							ProductName: "Cadbury Celebrations Pack (114gm)",
							Category: "Chocolate",
							AttributeID: 186,
							Price: 299,
							ImageUrl:
								"https://imgcdn.floweraura.com/11-A-Recovered.jpg",
						},
						{
							ProductName: "Pack of 8 Ferrero Rocher Chocolate 100gm",
							Category: "Chocolate",
							AttributeID: 187,
							Price: 499,
							ImageUrl:
								"https://imgcdn.floweraura.com/13-A-Recovered.jpg",
						},



					],
				},
			],
		},
		{
			label: "Gifts",
			priority: 1,
			categories: [
				{
					label: "Gifts",
					title: "Select your Holiday's Gifts",
					priority: 1,
					minimumQuantity: 0,
					maximumQuantity: 10,
					products: [
						{
							ProductName: "New Year Quirky Mug",
							Category: "Gift",
							AttributeID: 193,
							Price: 245,
							ImageUrl:
								"https://imgcdn.floweraura.com/happy-new-year-quirky-printed-mug-9793937gf-B_0.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Rose & Black oud Scented Candle",
							Category: "Gift",
							AttributeID: 85,
							Price: 399,
							ImageUrl:
								"https://imgcdn.floweraura.com/rose-&-black-oud-scented-candle-9787190gf.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Flip Table Top Calender",
							Category: "Gift",
							AttributeID: 194,
							Price: 375,
							ImageUrl:
								"https://imgcdn.floweraura.com/vertical-flip-table-top-calendar-9793967gf-A_1.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "New Year Card",
							Category: "Gift",
							AttributeID: 201,
							Price: 149,
							ImageUrl:
								"https://imgcdn.floweraura.com/1-D_107.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Happy New Year Greeting Card",
							Category: "Gift",
							AttributeID: 202,
							Price: 149,
							ImageUrl:
								"https://imgcdn.floweraura.com/2-B_37.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},



						{
							ProductName: "Diary & Pen Combo",
							Category: "Gift",
							AttributeID: 78,
							Price: 495,
							ImageUrl:
								"https://imgcdn.floweraura.com/premium-notebook-and-pen-set-9804857ad-AA.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Heart Shaped Scented Candle Set of 2",
							Category: "Gift",
							AttributeID: 192,
							Price: 299,
							ImageUrl:
								"https://imgcdn.floweraura.com/DSC_5120-edited.jpg",
						},




						{
							ProductName: "Luxury Black Notebook",
							Category: "Gift",
							AttributeID: 190,
							Price: 295,
							ImageUrl:
								"https://imgcdn.floweraura.com/luxury-black-notebook-9804837ad-A.jpg",
						},

						{
							ProductName: "Mimosa N Cardamom Scented Candle",
							Category: "Gift",
							AttributeID: 154,
							Price: 350,
							ImageUrl:
								"https://imgcdn.floweraura.com/mimosa-cardamom-aroma-candle-981%20(1).jpg",
						},
						{
							ProductName: "Rose Gold Luxury Pen",
							Category: "Gift",
							AttributeID: 191,
							Price: 299,
							ImageUrl:
								"https://imgcdn.floweraura.com/luxury-black-pen-9804847ad-aaa.jpg",
						},
						{
							ProductName: "Rose N Black Oud Aroma Diffuser Set",
							Category: "Gift",
							AttributeID: 189,
							Price: 595,
							ImageUrl:
								"https://imgcdn.floweraura.com/rose-n-black-oud-aroma-diffuser-set-9797867gf-C_0_1.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
					],
				},
			],
		},

		{
			label: "Boxes",
			priority: 2,
			categories: [
				{
					label: "Boxes",
					title: "Select your box",
					priority: 2,
					minimumQuantity: 1,
					maximumQuantity: 1,
					products: [
						{
							ProductName: "Festive Cardboard box",
							Category: "Box",
							AttributeID: 93,
							Price: 99,
							ImageUrl:
								"https://imgcdn.floweraura.com/DSC_0713_0.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},

						{
							ProductName: "Handmade Net Basket",
							Category: "Box",
							AttributeID: 147,
							Price: 299,
							ImageUrl:
								"https://imgcdn.floweraura.com/DSC_3590.JPG?tr=w-298,h-298,dpr-1.5,q-70",
						},
					],
				},
			],
		},
	],




	61873: [
		{
			label: "Eatables",
			priority: 0,
			categories: [
				{
					label: "Festival Specials",
					title: "Select from Specials",
					priority: 0,
					minimumQuantity: 1,
					maximumQuantity: 10,
					products: [
						{
							ProductName: "Kaju Katli 250 gms",
							Category: "Sweet",
							AttributeID: 28,
							Price: 595,
							ImageUrl: "https://imgcdn.floweraura.com/DSC_9584%20(1).jpg",
						},
						{
							ProductName: "Motichoor Ladoo 250 gms",
							Category: "Sweet",
							AttributeID: 104,
							Price: 395,
							ImageUrl:
								"https://imgcdn.floweraura.com/protective-om-evil-eye-rakhi-wit%20(1).jpg",
						},
						{
							ProductName: "Kaju Kalimirch-Dry Fruit 75 Gm",
							Category: "Dry Fruits",
							AttributeID: 151,
							Price: 225,
							ImageUrl: "https://imgcdn.floweraura.com/DSC_7447-Edited.jpg",
						},
						// {
						//  ProductName: "BBQ Almonds",
						//  Category: "Dry Fruits",
						//  AttributeID: 140,
						//  Price: 175,
						//  ImageUrl: "https://imgcdn.floweraura.com/DSC_7447-Edited.jpg?tr=w-298,h-298,dpr-1.5,q-70"
						// },
						{
							ProductName: "Classic Multigrain",
							Category: "Dry Fruits",
							AttributeID: 141,
							Price: 99,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_0926.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Trail Mix Pouch",
							Category: "Dry Fruits",
							AttributeID: 89,
							Price: 175,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_0763%20(1).JPG?tr=w-298,h-298,dpr-1.5,q-70",
						},


						{
							ProductName: "Quinoa Millets",
							Category: "Dry Fruits",
							AttributeID: 143,
							Price: 99,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_0929_0.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
					],
				},
			],
		},
		{
			label: "Gifts",
			priority: 1,
			categories: [
				{
					label: "Gift",
					title: "Select your Gifts",
					priority: 1,
					minimumQuantity: 0,
					maximumQuantity: 10,
					products: [
						{
							ProductName: "Rose & Black oud Scented Candle",
							Category: "Gift",
							AttributeID: 161,
							Price: 350,
							ImageUrl:
								"https://imgcdn.floweraura.com/rose-&-black-oud-scented-candle-9787190gf.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Best Bro Sipper",
							Category: "Gift",
							AttributeID: 168,
							Price: 395,
							ImageUrl:
								"https://imgcdn.floweraura.com/best-bro-sipper-with-hazelnut-indulgence-9759260sd-B_0.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Jasmine & Marigold Reed Diffuser",
							Category: "Gift",
							AttributeID: 162,
							Price: 375,
							ImageUrl:
								"https://imgcdn.floweraura.com/jasmine-marigold-fragrance-reed-diffuser-9778800sd-A_0.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Best Bro Coffee Mug",
							Category: "Gift",
							AttributeID: 167,
							Price: 295,
							ImageUrl:
								"https://imgcdn.floweraura.com/best-bro-bhai-dooj-mug-9759270sd-A_0.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Jasmine & Marigold Scented Candle",
							Category: "Gift",
							AttributeID: 163,
							Price: 950,
							ImageUrl:
								"https://imgcdn.floweraura.com/jasmine--marigold-scented-candle%20(1)%20(1).jpg",
						},
						{
							ProductName: "French Lavender Oil Burner",
							Category: "Gift",
							AttributeID: 136,
							Price: 575,
							ImageUrl:
								"https://imgcdn.floweraura.com/french-lavender-scented-oil-burner-9778780sd-A_0.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Rose N Black Oud Aroma Diffuser Set",
							Category: "Gift",
							AttributeID: 164,
							Price: 675,
							ImageUrl:
								"https://imgcdn.floweraura.com/rose-n-black-oud-aroma-diffuser%20(2).jpg",
						},
						{
							ProductName: "Chakra & Luck Candle",
							Category: "Gift",
							AttributeID: 165,
							Price: 725,
							ImageUrl:
								"https://imgcdn.floweraura.com/chakra--luck-candle-9779040ad%20(1).jpg",
						},
						{
							ProductName: "Mimosa N Cardamom Scented Candle",
							Category: "Gift",
							AttributeID: 154,
							Price: 350,
							ImageUrl:
								"https://imgcdn.floweraura.com/mimosa-cardamom-aroma-candle-981%20(1).jpg",
						},
						{
							ProductName: "Ganesha Idol",
							Category: "Gift",
							AttributeID: 153,
							Price: 399,
							ImageUrl: "https://imgcdn.floweraura.com/Ganesha..jpg",
						},
					],
				},
			],
		},
		{
			label: "Choco & Cookie Delights",
			priority: 2,
			categories: [
				{
					label: "Choco & Cookie Delights",
					title: "Select from Choco & Cookie Delights ",
					priority: 2,
					minimumQuantity: 0,
					maximumQuantity: 10,
					products: [
						{
							ProductName: "Crispy Jeera Cookies",
							Category: "Cookies",
							AttributeID: 155,
							Price: 209,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_6653.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Almond Rocks",
							Category: "Chocolates",
							AttributeID: 61,
							Price: 199,
							ImageUrl:
								"https://imgcdn.floweraura.com/bakingo-chocolate-hazelnut-rocks-100-gms-9785960ad-AA.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Handmade Almond Cookies",
							Category: "Cookies",
							AttributeID: 156,
							Price: 299,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_6658.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Coconut Cookies",
							Category: "Cookies",
							AttributeID: 157,
							Price: 229,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_6651.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Hazelnut Rocks",
							Category: "Chocolates",
							AttributeID: 88,
							Price: 249,
							ImageUrl:
								"https://imgcdn.floweraura.com/7-A-Recovered_1.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Choco Chip Cookies",
							Category: "Cookies",
							AttributeID: 158,
							Price: 189,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_6659.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "2 Dairy Milk Silk",
							Category: "Chocolates",
							AttributeID: 102,
							Price: 250,
							ImageUrl:
								"https://imgcdn.floweraura.com/rakhi-attributes/Set-Of-2-Dairy-Milk-Silk-60-gm.jpg",
						},
						{
							ProductName: "Multi Grain Cookies",
							Category: "Cookies",
							AttributeID: 159,
							Price: 249,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_6650.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Wholesome Corn Cookies",
							Category: "Cookies",
							AttributeID: 160,
							Price: 189,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_6655.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},


						{
							ProductName: "16 Ferrero Rocher Chocolates",
							Category: "Chocolates",
							AttributeID: 99,
							Price: 999,
							ImageUrl: "https://imgcdn.floweraura.com/DSC_5557.jpg",
						},


						{
							ProductName: "2 Temptations",
							Category: "Chocolates",
							AttributeID: 100,
							Price: 350,
							ImageUrl: "https://imgcdn.floweraura.com/4-%20(1).JPG",
						},
					],
				},
			],
		},


		{
			label: "Boxes",
			priority: 3,
			categories: [
				{
					label: "Boxes",
					title: "Select your box",
					priority: 3,
					minimumQuantity: 1,
					maximumQuantity: 1,
					products: [
						{
							ProductName: "Handmade Net Basket",
							Category: "Box",
							AttributeID: 166,
							Price: 199,
							ImageUrl:
								"https://imgcdn.floweraura.com/DSC_3590.JPG?tr=w-298,h-298,dpr-1.5,q-70",
						},
					],
				},
			],
		},
	],
	62527: [
		// {
		// label: "Holiday Special",
		// priority: 0,
		// categories: [


		{
			label: "Gifts",
			priority: 1,
			categories: [
				{
					label: "Gift",
					title: "Select your Gifts",
					priority: 1,
					minimumQuantity: 0,
					maximumQuantity: 10,
					products: [
						{
							ProductName: "Rose & Black oud Scented Candle",
							Category: "Gift",
							AttributeID: 161,
							Price: 350,
							ImageUrl:
								"https://imgcdn.floweraura.com/rose-&-black-oud-scented-candle-9787190gf.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Fridge Magnet Bottle Opener",
							Category: "Gift",
							AttributeID: 178,
							Price: 99,
							ImageUrl:
								"https://imgcdn.floweraura.com/fridge-magnet-bottle-opener-9801640ad.jpg",
						},


						{
							ProductName: "Jasmine & Marigold Reed Diffuser",
							Category: "Gift",
							AttributeID: 162,
							Price: 375,
							ImageUrl:
								"https://imgcdn.floweraura.com/jasmine-marigold-fragrance-reed-diffuser-9778800sd-A_0.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Ganesha Idol",
							Category: "Gift",
							AttributeID: 153,
							Price: 399,
							ImageUrl:
								"https://imgcdn.floweraura.com/Ganesha..jpg",
						},
						{
							ProductName: "Large teddy bear - 12 inch",
							Category: "Gift",
							AttributeID: 179,
							Price: 395,
							ImageUrl:
								"https://imgcdn.floweraura.com/DSC_1885.jpg",
						},
						{
							ProductName: "Jasmine & Marigold Scented Candle",
							Category: "Gift",
							AttributeID: 163,
							Price: 950,
							ImageUrl:
								"https://imgcdn.floweraura.com/jasmine--marigold-scented-candle%20(1)%20(1).jpg",
						},
						{
							ProductName: "French Lavender Oil Burner",
							Category: "Gift",
							AttributeID: 136,
							Price: 575,
							ImageUrl:
								"https://imgcdn.floweraura.com/french-lavender-scented-oil-burner-9778780sd-A_0.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Rose N Black Oud Aroma Diffuser Set",
							Category: "Gift",
							AttributeID: 164,
							Price: 675,
							ImageUrl:
								"https://imgcdn.floweraura.com/rose-n-black-oud-aroma-diffuser%20(2).jpg",
						},
						{
							ProductName: "Chakra & Luck Candle",
							Category: "Gift",
							AttributeID: 165,
							Price: 725,
							ImageUrl:
								"https://imgcdn.floweraura.com/chakra--luck-candle-9779040ad%20(1).jpg",
						},
						{
							ProductName: "Mimosa N Cardamom Scented Candle",
							Category: "Gift",
							AttributeID: 154,
							Price: 350,
							ImageUrl:
								"https://imgcdn.floweraura.com/mimosa-cardamom-aroma-candle-981%20(1).jpg",
						},


					],
				},
			],
		},
		{
			label: "Choco & Cookie Delights",
			priority: 0,
			categories: [
				{
					label: "Choco & Cookie Delights",
					title: "Select from Choco & Cookie Delights ",
					priority: 0,
					minimumQuantity: 1,
					maximumQuantity: 10,
					products: [
						{
							ProductName: "Crispy Jeera Cookies",
							Category: "Cookies",
							AttributeID: 155,
							Price: 209,
							ImageUrl: "https://imgcdn.floweraura.com/IMG_6653.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Almond Rocks",
							Category: "Chocolates",
							AttributeID: 61,
							Price: 199,
							ImageUrl: "https://imgcdn.floweraura.com/bakingo-chocolate-hazelnut-rocks-100-gms-9785960ad-AA.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Plum Cake 100 Gm",
							Category: "Plum Cake",
							AttributeID: 176,
							Price: 149,
							ImageUrl: "https://bkmedia.bakingo.com/dry-fruit-plum-cake-100-gms-cake3128plum-AA.jpg",
						},
						{
							ProductName: "Plum Cake 250 Gm",
							Category: "Plum Cake",
							AttributeID: 175,
							Price: 299,
							ImageUrl:
								"https://bkmedia.bakingo.com/plum-licious-christmas-tree-cake0164plum-BBBB.jpg",
						},
						{
							ProductName: "Plum Cake 400 Gm",
							Category: "Plum Cake",
							AttributeID: 174,
							Price: 449,
							ImageUrl: "https://bkmedia.bakingo.com/plum-cake-for-christmas-in-tin-box-cake3606plum-A_0.jpg",
						},
						{
							ProductName: "Handmade Almond Cookies",
							Category: "Cookies",
							AttributeID: 156,
							Price: 299,
							ImageUrl: "https://imgcdn.floweraura.com/IMG_6658.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Coconut Cookies",
							Category: "Cookies",
							AttributeID: 157,
							Price: 229,
							ImageUrl: "https://imgcdn.floweraura.com/IMG_6651.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Hazelnut Rocks",
							Category: "Chocolates",
							AttributeID: 88,
							Price: 249,
							ImageUrl:
								"https://imgcdn.floweraura.com/7-A-Recovered_1.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Choco Chip Cookies",
							Category: "Cookies",
							AttributeID: 158,
							Price: 189,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_6659.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "2 Dairy Milk Silk",
							Category: "Chocolates",
							AttributeID: 102,
							Price: 250,
							ImageUrl:
								"https://imgcdn.floweraura.com/rakhi-attributes/Set-Of-2-Dairy-Milk-Silk-60-gm.jpg",
						},
						{
							ProductName: "Multi Grain Cookies",
							Category: "Cookies",
							AttributeID: 159,
							Price: 249,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_6650.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Wholesome Corn Cookies",
							Category: "Cookies",
							AttributeID: 160,
							Price: 189,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_6655.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},




						{
							ProductName: "16 Ferrero Rocher Chocolates",
							Category: "Chocolates",
							AttributeID: 99,
							Price: 999,
							ImageUrl: "https://imgcdn.floweraura.com/DSC_5557.jpg",
						},




						{
							ProductName: "2 Temptations",
							Category: "Chocolates",
							AttributeID: 100,
							Price: 350,
							ImageUrl: "https://imgcdn.floweraura.com/4-%20(1).JPG",
						},
					],
				},
			],
		},




		{
			label: "Boxes",
			priority: 2,
			categories: [
				{
					label: "Boxes",
					title: "Select your box",
					priority: 2,
					minimumQuantity: 1,
					maximumQuantity: 1,
					products: [
						{
							ProductName: "Handmade Net Basket",
							Category: "Box",
							AttributeID: 166,
							Price: 199,
							ImageUrl:
								"https://imgcdn.floweraura.com/DSC_3590.JPG?tr=w-298,h-298,dpr-1.5,q-70",
						},
					],
				},
			],
		},
	],
	60792: [
		{
			label: "Eatables",
			priority: 0,
			categories: [
				{
					label: "Eatables",
					title: "Select from Eatables",
					priority: 0,
					minimumQuantity: 1,
					maximumQuantity: 10,
					products: [
						{
							ProductName: "Kaju Katli 250 gms",
							Category: "Sweet",
							AttributeID: 28,
							Price: 595,
							ImageUrl: "https://imgcdn.floweraura.com/DSC_9584%20(1).jpg",
						},
						{
							ProductName: "Motichoor Ladoo 250 gms",
							Category: "Sweet",
							AttributeID: 104,
							Price: 395,
							ImageUrl:
								"https://imgcdn.floweraura.com/protective-om-evil-eye-rakhi-wit%20(1).jpg",
						},
						{
							ProductName: "Kaju Kalimirch-Dry Fruit 75 Gm",
							Category: "Dry Fruits",
							AttributeID: 151,
							Price: 225,
							ImageUrl: "https://imgcdn.floweraura.com/DSC_7447-Edited.jpg",
						},
						// {
						//  ProductName: "BBQ Almonds",
						//  Category: "Dry Fruits",
						//  AttributeID: 140,
						//  Price: 175,
						//  ImageUrl: "https://imgcdn.floweraura.com/DSC_7447-Edited.jpg?tr=w-298,h-298,dpr-1.5,q-70"
						// },
						{
							ProductName: "Classic Multigrain",
							Category: "Dry Fruits",
							AttributeID: 141,
							Price: 99,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_0926.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Trail Mix Pouch",
							Category: "Dry Fruits",
							AttributeID: 89,
							Price: 175,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_0763%20(1).JPG?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Paan Raisin",
							Category: "Dry Fruits",
							AttributeID: 142,
							Price: 99,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_0924%20(1).jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Quinoa Millets",
							Category: "Dry Fruits",
							AttributeID: 143,
							Price: 99,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_0929_0.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
					],
				},
			],
		},
		{
			label: "Gifts",
			priority: 1,
			categories: [
				{
					label: "Gift",
					title: "Select your Gifts",
					priority: 1,
					minimumQuantity: 0,
					maximumQuantity: 10,
					products: [
						{
							ProductName: "Rose & Black oud Scented Candle",
							Category: "Gift",
							AttributeID: 161,
							Price: 350,
							ImageUrl:
								"https://imgcdn.floweraura.com/rose-&-black-oud-scented-candle-9787190gf.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Jasmine & Marigold Reed Diffuser",
							Category: "Gift",
							AttributeID: 162,
							Price: 375,
							ImageUrl:
								"https://imgcdn.floweraura.com/jasmine-marigold-fragrance-reed-diffuser-9778800sd-A_0.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Jasmine & Marigold Scented Candle",
							Category: "Gift",
							AttributeID: 163,
							Price: 950,
							ImageUrl:
								"https://imgcdn.floweraura.com/jasmine--marigold-scented-candle%20(1)%20(1).jpg",
						},
						{
							ProductName: "French Lavender Oil Burner",
							Category: "Gift",
							AttributeID: 136,
							Price: 575,
							ImageUrl:
								"https://imgcdn.floweraura.com/french-lavender-scented-oil-burner-9778780sd-A_0.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Rose N Black Oud Aroma Diffuser Set",
							Category: "Gift",
							AttributeID: 164,
							Price: 675,
							ImageUrl:
								"https://imgcdn.floweraura.com/rose-n-black-oud-aroma-diffuser%20(2).jpg",
						},
						{
							ProductName: "Chakra & Luck Candle",
							Category: "Gift",
							AttributeID: 165,
							Price: 725,
							ImageUrl:
								"https://imgcdn.floweraura.com/chakra--luck-candle-9779040ad%20(1).jpg",
						},
						{
							ProductName: "Mimosa N Cardamom Scented Candle",
							Category: "Gift",
							AttributeID: 154,
							Price: 350,
							ImageUrl:
								"https://imgcdn.floweraura.com/mimosa-cardamom-aroma-candle-981%20(1).jpg",
						},
						{
							ProductName: "Ganesha Idol",
							Category: "Gift",
							AttributeID: 153,
							Price: 399,
							ImageUrl: "https://imgcdn.floweraura.com/Ganesha..jpg",
						},
					],
				},
			],
		},
		{
			label: "Choco & Cookie Delights",
			priority: 2,
			categories: [
				{
					label: "Choco & Cookie Delights",
					title: "Select from Choco & Cookie Delights ",
					priority: 2,
					minimumQuantity: 0,
					maximumQuantity: 10,
					products: [
						{
							ProductName: "Crispy Jeera Cookies",
							Category: "Cookies",
							AttributeID: 155,
							Price: 209,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_6653.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Handmade Almond Cookies",
							Category: "Cookies",
							AttributeID: 156,
							Price: 299,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_6658.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Coconut Cookies",
							Category: "Cookies",
							AttributeID: 157,
							Price: 229,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_6651.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Choco Chip Cookies",
							Category: "Cookies",
							AttributeID: 158,
							Price: 189,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_6659.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Multi Grain Cookies",
							Category: "Cookies",
							AttributeID: 159,
							Price: 249,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_6650.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Wholesome Corn Cookies",
							Category: "Cookies",
							AttributeID: 160,
							Price: 189,
							ImageUrl:
								"https://imgcdn.floweraura.com/IMG_6655.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Almond Rocks",
							Category: "Chocolates",
							AttributeID: 61,
							Price: 199,
							ImageUrl:
								"https://imgcdn.floweraura.com/bakingo-chocolate-hazelnut-rocks-100-gms-9785960ad-AA.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "Hazelnut Rocks",
							Category: "Chocolates",
							AttributeID: 88,
							Price: 249,
							ImageUrl:
								"https://imgcdn.floweraura.com/7-A-Recovered_1.jpg?tr=w-298,h-298,dpr-1.5,q-70",
						},
						{
							ProductName: "16 Ferrero Rocher Chocolates",
							Category: "Chocolates",
							AttributeID: 99,
							Price: 999,
							ImageUrl: "https://imgcdn.floweraura.com/DSC_5557.jpg",
						},
						{
							ProductName: "2 Dairy Milk Silk",
							Category: "Chocolates",
							AttributeID: 102,
							Price: 250,
							ImageUrl:
								"https://imgcdn.floweraura.com/rakhi-attributes/Set-Of-2-Dairy-Milk-Silk-60-gm.jpg",
						},
						{
							ProductName: "2 Temptations",
							Category: "Chocolates",
							AttributeID: 100,
							Price: 350,
							ImageUrl: "https://imgcdn.floweraura.com/4-%20(1).JPG",
						},
					],
				},
			],
		},


		{
			label: "Boxes",
			priority: 3,
			categories: [
				{
					label: "Boxes",
					title: "Select your box",
					priority: 3,
					minimumQuantity: 1,
					maximumQuantity: 1,
					products: [
						{
							ProductName: "Handmade Net Basket",
							Category: "Box",
							AttributeID: 166,
							Price: 199,
							ImageUrl:
								"https://imgcdn.floweraura.com/DSC_3590.JPG?tr=w-298,h-298,dpr-1.5,q-70",
						},
					],
				},
			],
		},
	],
};








const FlowerAura = () => {
	const [cart, setCart] = useState({});
	const [stackedImages, setStackedImages] = useState([]);
	const [activeStep, setActiveStep] = useState(0);
	const [showCart, setShowCart] = useState(false);
	const [showError, setShowError] = useState(false);
	const [error, setError] = useState("");
	const [productContext, setProductContext] = useState(null);
	const [shopDomain, setShopDomain] = useState(null);

	const searchParams = new URLSearchParams(window.location.search);

	const defaultNid = "61723";
	const nidParam = searchParams.get("nid");
	const nid = data[nidParam] ? nidParam : defaultNid;
	
	// Extract product context from URL parameters
	const variantId = searchParams.get("variant_id");
	const productId = searchParams.get("product_id");
	const sectionId = searchParams.get("section_id");
	const sectionsUrl = searchParams.get("sections_url");
	const shopDomainParam = searchParams.get("shop_domain");
	
	// Set product context if available
	useEffect(() => {
		if (variantId || productId) {
			setProductContext({
				variant_id: variantId,
				product_id: productId,
				section_id: sectionId,
				sections_url: sectionsUrl
			});
			setShopDomain(shopDomainParam);
		}
		
		// If no shop domain from URL, try to get it from parent window or current location
		if (!shopDomainParam) {
			let detectedDomain = null;
			
			// Try parent window first
			if (window.parent && window.parent.location) {
				try {
					const parentHost = window.parent.location.hostname;
					if (parentHost && parentHost !== 'localhost' && parentHost !== '127.0.0.1') {
						detectedDomain = parentHost;
						console.log('Detected shop domain from parent window:', parentHost);
					}
				} catch (e) {
					console.log('Could not access parent window location');
				}
			}
			
			// If still no domain, try current window location
			if (!detectedDomain && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
				detectedDomain = window.location.hostname;
				console.log('Using current window hostname as shop domain:', detectedDomain);
			}
			
			if (detectedDomain) {
				setShopDomain(detectedDomain);
			}
		}
	}, [variantId, productId, sectionId, sectionsUrl, shopDomainParam]);
	
	if (Array.isArray(data[nid])) {
		data[nid].sort((a, b) => (a.priority ?? 0) - (b.priority ?? 0));
	}

	for (let i = 0; i < (data[nid]?.length || 0); i++) {
		const step = data[nid][i];
		const updatedCategories = step.categories.map((category) => ({
			...category,
			step: i, // Assign step property
		}));
		step.categories = updatedCategories; // Replace the old categories with updated ones
		step.categories.sort((a, b) => (a.priority ?? 0) - (b.priority ?? 0));
	}


	const closeMyEraModal = (dummy) => {
		// This function can be used to close any modal if needed
		console.log('Modal close function called');
	};



	const fireGtagEvent = (data) => {
		if (window.gtagTest) {
			window.gtagTest("event", "test", data);
		}
	};

	// Message listener for iframe communication
	useEffect(() => {
		const onMessage = (event) => {
			// Check sender origin to be trusted
			const data = event.data;
			
			console.log('Iframe received message from parent:', data);

			if (data.func === "testResponse") {
				console.log('Test response received from parent:', data.message);
			} else if (data.action === "product_context") {
				// Handle product context from parent window
				console.log('Received product context:', data.productData);
				setProductContext(data.productData);
				setShopDomain(data.shopDomain);
			} else if (data.action === "cart_added") {
				console.log('Cart addition status received:', data.success);
				if (data.success) {
					toast.success("Items added to cart successfully!");
				} else {
					toast.error("Failed to add items to cart: " + (data.error || "Unknown error"));
				}
			} else if (data.action === "cart_redirect") {
				// Handle redirect request from parent
				if (data.url) {
					window.parent.location.href = data.url;
				}
			} else if (typeof(window[data.func]) == "function") {
				window[data.func].call(null, data.message);
			}
		};

		if (window.addEventListener) {
			window.addEventListener("message", onMessage, false);
		} else if (window.attachEvent) {
			window.attachEvent("onmessage", onMessage, false);
		}

		// Cleanup
		return () => {
			if (window.removeEventListener) {
				window.removeEventListener("message", onMessage, false);
			} else if (window.detachEvent) {
				window.detachEvent("onmessage", onMessage, false);
			}
		};
	}, []);

	// Expose functions to window for iframe communication
	useEffect(() => {
		window.closeMyEraModal = closeMyEraModal;
		window.fireGtagEvent = fireGtagEvent;

		// Test if parent window has message handler
		setTimeout(() => {
			console.log('Testing parent window message handler...');
			postMessageToParent({
				func: "test",
				message: { test: "Hello from iframe" }
			});
		}, 2000);

		return () => {
			delete window.closeMyEraModal;
			delete window.fireGtagEvent;
		};
	}, []);

	const postMessageToParent = (data) => {
		if (!window.ReactNativeWebView) {
			window.parent.postMessage(data, "*");
		} else {
			window.ReactNativeWebView.postMessage(JSON.stringify(data));
		}
	};

	const getCategoryCount = (categoryName, checkCart = cart) => {
		let productIds = new Set();
		for (let step of (data[nid] || [])) {
			for (let category of step.categories) {
				if (category.label === categoryName) {
					productIds = new Set(
						category.products.map((product) => product.AttributeID)
					);
					break;
				}
			}
			if (productIds.size > 0) {
				break;
			}
		}
		return Object.values(checkCart).reduce(
			(aggr, product) =>
				aggr + (productIds.has(product.AttributeID) ? product.quantity : 0),
			0
		);
	};

	const addToCart = (product, qty, category) => {
		var DTO = {};
		if (qty > 0) {
			DTO = {
				event_name: "make_your_own_hamper",
				event_params: {
					heading:
						product.CategoryName === "Single" ? "Rakhi" : product.CategoryName,
					sub_heading: product.ProductName,
					event_label: "add",
					validation_message: "",
				},
			};
		} else {
			DTO = {
				event_name: "make_your_own_hamper",
				event_params: {
					heading:
						product.CategoryName === "Single" ? "Rakhi" : product.CategoryName,
					sub_heading: product.ProductName,
					event_label: "delete",
					validation_message: "",
				},
			};
		}
		postMessageToParent({
			func: "ga_event_func",
			message: DTO,
		});
		ga4.event("product_add_or_delete", DTO);
		console.log(product, qty);
		setCart(
			produce((prev) => {
				if (!(product.AttributeID in prev)) {
					prev[product.AttributeID] = { ...product, quantity: 0, category };
				}
				prev[product.AttributeID].quantity += qty;
				if (prev[product.AttributeID].quantity === 0) {
					delete prev[product.AttributeID];
					if (product.category) {
						const categoryCount = getCategoryCount(
							product.category.label,
							prev
						);
						if (categoryCount < product.category.minimumQuantity) {
							if (product.category.step < activeStep) {
								setActiveStep(product.category.step);
								setShowCart(false);
								setError("Please select mandatory product");
								setShowError(true);
							}
						}
					}
				}
			})
		);
		if (qty > 0) {
			setStackedImages((prev) => {
				return [...prev, product.ImageUrl];
			});
		} else {
			setStackedImages((prev) => {
				const index = prev.findIndex((val) => val === product.ImageUrl);
				if (index !== -1) {
					prev.splice(index, 1);
				}
				return prev;
			});
		}
	};

	const handleDeletion = (product) => {
		setCart(
			produce((prev) => {
				if (product.AttributeID in prev) {
					delete prev[product.AttributeID];
					const categoryCount = getCategoryCount(product.category.label, prev);
					if (categoryCount < product.category.minimumQuantity) {
						if (product.category.step < activeStep) {
							setActiveStep(product.category.step);
							setShowCart(false);
							var DTO = {
								event_name: "make_your_own_hamper",
								event_params: {
									heading:
										product.Category === "Single" ? "Rakhi" : product.Category,
									sub_heading: product.ProductName,
									event_label: "delete",
									validation_message: "Please select mandatory product",
								},
							};
							postMessageToParent({
								func: "ga_event_func",
								message: DTO,
							});
							ga4.event("product_add_or_delete", DTO);
							setError("Please select mandatory product");
							setShowError(true);
						}
					}
				}
			})
		);
		setStackedImages((prev) => prev.filter((val) => val !== product.ImageUrl));
	};

	const validateStep = (step = activeStep) => {
		for (let category of data[nid][step].categories) {
			const productIds = new Set(
				category.products.map((product) => product.AttributeID)
			);

			const minQty = category.minimumQuantity;
			const maxQty = category.maximumQuantity;

			const count = Object.values(cart).reduce((aggr, curr) => {
				if (productIds.has(curr.AttributeID)) {
					return aggr + curr.quantity;
				}
				return aggr;
			}, 0);

			if (count < minQty || count > maxQty) {
				return false;
			}
		}

		return true;
	};

	const handleBuyNow = async () => {
		if (!showCart) {
			setShowCart((prev) => !prev);
			return;
		}
		for (let i = 0; i < data[nid].length; i++) {
			if (!validateStep(i)) {
				console.log("Qty not satisfied");
				toast.error("Quantities not satisfied for: " + data[nid][i].label);
				return;
			}
		}
		const items = Object.values(cart).map((item) => ({
			item_id: item.AttributeID,
			item_category: item.Category,
			price: item.Price,
			quantity: item.quantity,
		}));
		const DTO = {
			event_name: "make_your_own_hamper",
			event_params: {
				items: items,
				event_category: "buy_now",
				event_label: "click",
			},
		};
		postMessageToParent({
			func: "ga_event_func",
			message: DTO,
		});
		ga4.event("add_to_cart", DTO);
		
		// Add directly to Shopify cart using the format from your images
		try {
			const cartItems = Object.values(cart);
			const hamperId = nid || "61723";
			
			// Calculate totals
			const totalPrice = cartItems.reduce((sum, item) => sum + (item.Price * item.quantity), 0);
			const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
			
			// Create FormData exactly like the successful request in your images
			const formData = new FormData();
			formData.append('id', productContext?.variant_id || '46915390505219'); // From your image
			formData.append('quantity', '1'); // Always 1 for the hamper container
			formData.append('form_type', 'product');
			formData.append('utf8', '✓');
			formData.append('section_id', productContext?.section_id || 'template--20143574483203_main');
			formData.append('sections', 'cart-drawer,cart-icon-bubble');
			formData.append('sections_url', productContext?.sections_url || window.location.pathname);
			
			// Add hamper-specific properties
			formData.append('Hamper ID', hamperId);
			formData.append('Hamper Type', 'FlowerAura Custom Hamper');
			formData.append('Total Items', totalQuantity.toString());
			formData.append('Total Price', totalPrice.toString());
			formData.append('Selected Items', JSON.stringify(cartItems.map(item => ({
				name: item.ProductName,
				category: item.Category,
				price: item.Price,
				quantity: item.quantity,
				attribute_id: item.AttributeID
			}))));
			formData.append('Shop Domain', shopDomain || window.location.hostname);

			console.log('Adding to Shopify cart with form data:', Object.fromEntries(formData));

			// POST directly to Shopify cart endpoint using the correct store domain
			// Manual override for testing - you can set this to your shop domain
			const manualShopDomain = 'myeratestapi.myshopify.com'; // Change this to your shop domain
			
			const shopifyCartUrl = shopDomain 
				? `https://${shopDomain}/cart/add`
				: manualShopDomain 
					? `https://${manualShopDomain}/cart/add`
					: `${window.location.protocol}//${window.location.host}/cart/add`;
			
			console.log('Shop domain:', shopDomain);
			console.log('Manual shop domain:', manualShopDomain);
			console.log('Posting to Shopify cart URL:', shopifyCartUrl);
			
			const response = await fetch(shopifyCartUrl, {
				method: 'POST',
				body: formData
			});

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const result = await response.text();
			console.log('Successfully added to cart:', result);

			// Show success message
			toast.success(`Added custom hamper to cart! Check your cart to proceed.`);

			// Notify parent window of success
			if (window.parent && window.parent.postMessage) {
				window.parent.postMessage({
					action: 'cart_added',
					success: true,
					message: 'Hamper added to cart successfully',
					hamper_id: hamperId,
					total_price: totalPrice,
					total_quantity: totalQuantity
				}, "*");
			}

		} catch (error) {
			console.error('Error adding to cart:', error);
			toast.error("Failed to add hamper to cart. Please try again.");
			
			// Notify parent window of error
			if (window.parent && window.parent.postMessage) {
				window.parent.postMessage({
					action: 'cart_added',
					success: false,
					message: error.message
				}, "*");
			}
		}
	};

	const buildCounter = (product, category) => {
		const canAdd = getCategoryCount(category.label) < category.maximumQuantity;

		return (
			<div className={[styles.counter, styles.product_cta].join(" ")}>
				<button
					onClick={() => {
						addToCart(product, -1);
					}}
				>
					-
				</button>
				<span>{cart[product.AttributeID].quantity}</span>
				<button
					className={!canAdd && styles.disabled}
					onClick={() => {
						if (!canAdd) {
							var DTO = {
								event_name: "make_your_own_hamper",
								event_params: {
									heading:
										product.Category === "Single" ? "Rakhi" : product.Category,
									sub_heading: product.ProductName,
									event_label: "add",
									validation_message:
										"You have reached maximum selection limit",
								},
							};
							postMessageToParent({
								func: "ga_event_func",
								message: DTO,
							});
							ga4.event("product_add_or_delete", DTO);
							setError("You have reached maximum selection limit");
							setShowError(true);
							return;
						}
						addToCart(product, 1);
					}}
				>
					+
				</button>
			</div>
		);
	};

	const buildProductList = (category) => {
		return (
			<div className={styles.product_list}>
				{category.products.map((product) => (
					<div key={product.AttributeID} className={styles.product_container}>
						<img src={product.ImageUrl} alt={product.ProductName} />
						<div className={styles.product_details}>
							<div className={styles.product_name}>{product.ProductName}</div>
							<div className={styles.product_footer}>
								<div className={styles.product_price}>
									₹&nbsp;{product.Price}
								</div>
								{category.maximumQuantity === 1 &&
									category.maximumQuantity === 1 &&
									category.products.length === 1 ? (
									<button
										className={[styles.product_cta, styles.disabled].join(" ")}
										onClick={() => {
											setError("You cannot alter this product");
											setShowError(true);
											return;
										}}
									>
										Added
									</button>
								) : !(product.AttributeID in cart) ? (
									<button
										className={[
											styles.product_cta,
											getCategoryCount(category.label) >=
											category.maximumQuantity && styles.disabled,
										].join(" ")}
										onClick={() => {
											if (
												getCategoryCount(category.label) >=
												category.maximumQuantity
											) {
												setError("You have reached maximum selection limit");
												setShowError(true);
												return;
											}
											addToCart(product, 1, category);
										}}
									>
										Add
									</button>
								) : (
									buildCounter(product, category)
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		);
	};

	const buildImageStack = () => {
		const imageStackLength = 3;
		return (
			<div
				className={styles.image_stack}
				style={{
					marginRight:
						stackedImages.length > 0
							? `${(Math.min(stackedImages.length, imageStackLength) - 1) * -28 +
							12
							}px`
							: "0px",
				}}
			>
				{stackedImages
					.slice(Math.max(stackedImages.length - imageStackLength, 0))
					.map((src, idx) => (
						<img
							key={idx}
							src={src}
							style={{
								transform: `translateX(${idx * -28}px)`,
							}}
							alt="Product"
						/>
					))}
			</div>
		);
	};

	const buildCartList = () => {
		return (
			<div
				className={styles.cart_list}
				style={{
					maxHeight: showCart ? "70vh" : "0vh",
					padding: showCart ? "16px" : "0px",
				}}
			>
				{Object.values(cart).map((product, idx) => (
					<>
						<div className={styles.cart_item}>
							<img src={product.ImageUrl} alt={product.ProductName} />
							<div className={styles.cart_item_details}>
								<div className={styles.cart_item_name}>
									{product.ProductName}
								</div>
								<div className={styles.cart_item_price}>₹ {product.Price}</div>
							</div>
							{product.category.maximumQuantity === 1 &&
								product.category.maximumQuantity === 1 &&
								product.category.products.length === 1 ? (
								<button
									className={[styles.product_cta, styles.disabled].join(" ")}
									onClick={() => {
										setError("You cannot alter this product");
										setShowError(true);
										return;
									}}
								>
									Added
								</button>
							) : (
								<div className={styles.item_cta}>
									<DeleteRounded
										onClick={() => {
											handleDeletion(product);
										}}
									/>
									{buildCounter(product, product.category)}
								</div>
							)}
						</div>
						{idx !== Object.values(cart).length - 1 && (
							<div className={styles.divider}>
								<hr />
							</div>
						)}
					</>
				))}
			</div>
		);
	};

	useEffect(() => {
		if (showError) {
			setTimeout(() => {
				setShowError(false);
			}, 2000);
		}
	}, [showError]);

	useEffect(() => {
		if (Object.keys(cart).length === 0) {
			setShowCart(false);
		}
	}, [cart]);

	useEffect(() => {
		const step = data[nid]?.[activeStep];

		const outer = document.getElementById("outer-container");
		if (outer && typeof outer.scrollTo === "function") {
			outer.scrollTo({ top: 0 });
		}

		if (!step) return;

		step.categories.forEach((category) => {
			if (category.maximumQuantity === 1 && category.products.length === 1) {
				const product = category.products[0];
				setCart((prev) => ({
					...prev,
					[product.AttributeID]: {
						...product,
						quantity: 1,
						category,
					},
				}));
			}
		});
	}, [nid, activeStep]);

	return (
		<div className={styles.main_container}>
			{/* Hidden quantity element for Shopify cart integration */}
			<div id="quantity-era" style={{ display: 'none' }}>
				{Object.values(cart).reduce((aggr, curr) => aggr + curr.quantity, 0)}
			</div>
			
			{/* Product Context Display */}
			{productContext && (
				<div style={{ 
					background: '#f8f9fa', 
					padding: '12px', 
					margin: '8px', 
					borderRadius: '8px',
					border: '1px solid #e9ecef',
					fontSize: '14px',
					color: '#495057'
				}}>
					<strong>Customizing for:</strong> {productContext.product_name || 'Selected Product'} 
					{productContext.variant_id && (
						<span style={{ marginLeft: '12px', color: '#6c757d' }}>
							(Variant: {productContext.variant_id})
						</span>
					)}
				</div>
			)}
			
			<div
				className={styles.header_backdrop}
				style={{
					backgroundColor: showError
						? "rgba(0, 0, 0, 0.4)"
						: "rgba(0, 0, 0, 0)",
					maxHeight: showError ? "200px" : "0px",
					padding: showError ? "12px" : "0px",
					backdropFilter: showError ? "blur(5px)" : "blur(0px)",
				}}
			>
				{error}
			</div>
			<div
				className={styles.backdrop}
				style={{
					height: showCart ? "100%" : "0%",
					background: showCart ? "rgba(0, 0, 0, 0.4)" : "rgba(0, 0, 0, 0)",
				}}
				onClick={() => {
					if (showCart) {
						setShowCart((prev) => !prev);
					}
				}}
			/>
			<div className={styles.header}>
				{activeStep > 0 && (
					<button
						className={[styles.button, styles.secondary].join(" ")}
						onClick={() => {
							setActiveStep((prev) => {
								if (prev - 1 >= 0) {
									return prev - 1;
								}
								return prev;
							});

							setShowCart(false);
						}}
					>
						<ArrowBackIosNew />
					</button>
				)}
				<div className={styles.stepper_container}>
					<Stepper
						activeStep={activeStep}
						sx={{
							"& .MuiStepConnector-line": {
								borderTopWidth: "2px",
							},
							"& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line": {
								borderColor: "#80D381",
							},
						}}
					>
						{data[nid].map((stage, idx) => (
							<Step
								key={stage.label}
								completed={activeStep >= idx && validateStep(idx)}
							>
								<StepLabel
									style={{
										cursor: "pointer",
									}}
									onClick={() => {
										if (idx > activeStep) {
											for (let i = activeStep; i < idx; i++) {
												if (!validateStep(i)) {
													if (i === activeStep) {
														setError("Please select an item to proceed");
														setShowError(true);
													} else {
														setError("Please select mandatory product");
														setShowError(true);
														setActiveStep(i);
													}
													return;
												}
											}
										}
										setActiveStep(idx);
										setShowCart(false);
									}}
								>
									<div
										style={{
											width: "16px",
											height: "16px",
											borderRadius: "50%",
											background:
												activeStep >= idx && validateStep(idx)
													? "#80D381"
													: "#D9D9D9",
										}}
									/>
								</StepLabel>
							</Step>
						))}
					</Stepper>
				</div>
			</div>
			<div className={styles.stage_container}>
				{data[nid][activeStep].categories.map((category) => (
					<div className={styles.stage}>
						<div className={styles.stage_header}>
							<div className={styles.stage_title}>
								{category.title}{" "}
								{category.minimumQuantity > 0 && (
									<span style={{ color: "red" }}>*</span>
								)}
							</div>
							<div className={styles.stage_subtitle}>
								{category.subtitle ??
									`You can add upto ${category.maximumQuantity} product${category.maximumQuantity > 1 ? "s" : ""
									}`}
							</div>
						</div>
						{buildProductList(category)}
					</div>
				))}
			</div>
			<div
				className={styles.cart_footer}
				style={{
					boxShadow: !showCart ? "0px -5px 16px 0px #dddede" : "none",
				}}
			>
				{showCart && (
					<span
						className={styles.cart_close}
						onClick={() => {
							setShowCart(false);
						}}
					>
						&times;
					</span>
				)}
				{buildCartList()}
				<div className={styles.cart_summary_container}>
					<div
						className={styles.cart_summary}
						onClick={() =>
							Object.keys(cart).length > 0 && setShowCart((prev) => !prev)
						}
					>
						{buildImageStack()}
						<div className={styles.cart_info}>
							<div>
								{Object.values(cart).reduce(
									(aggr, curr) => aggr + curr.quantity,
									0
								)}
								&nbsp;item
								{Object.values(cart).reduce(
									(aggr, curr) => aggr + curr.quantity,
									0
								) !== 1
									? "s"
									: ""}
							</div>
							<div>
								₹&nbsp;
								{Object.values(cart).reduce(
									(aggr, curr) => aggr + curr.quantity * curr.Price,
									0
								)}
							</div>
						</div>
						{showCart ? <ArrowDropDown /> : <ArrowDropUp />}
					</div>
					<div className={styles.footer_cta}>
						{activeStep > 0 && (
							<button
								className={[styles.button, styles.secondary].join(" ")}
								onClick={() => {
									const DTO = {
										event_name: "make_your_own_hamper",
										event_params: {
											heading: data[nid][activeStep].label,
											event_label: "back",
											validation_message: "",
										},
									};
									ga4.event("back_button", DTO);
									postMessageToParent({
										func: "ga_event_func",
										message: DTO,
									});
									setActiveStep((prev) => {
										if (prev - 1 >= 0) {
											return prev - 1;
										}
										return prev;
									});
									setShowCart(false);
								}}
							>
								BACK
							</button>
						)}
						<button
							className={[
								styles.button,
								styles.primary,
								!validateStep() && styles.disabled,
							].join(" ")}
							onClick={() => {
								if (!validateStep()) {
									setError("Please select an item to proceed");
									setShowError(true);
									const DTO = {
										event_name: "make_your_own_hamper",
										event_params: {
											heading: data[nid][activeStep].label,
											event_label: "next",
											validation_message: "Please select an item to proceed",
										},
									};
									ga4.event("next_button", DTO);
									postMessageToParent({
										func: "ga_event_func",
										message: DTO,
									});
									return;
								}
								if (activeStep < data[nid].length - 1) {
									const DTO = {
										event_name: "make_your_own_hamper",
										event_params: {
											heading: data[nid][activeStep].label,
											event_label: "next",
											validation_message: "",
										},
									};
									ga4.event("next_button", DTO);
									postMessageToParent({
										func: "ga_event_func",
										message: DTO,
									});
									setActiveStep((prev) => {
										if (prev + 1 < data[nid].length) {
											return prev + 1;
										}
										return prev;
									});
									setShowCart(false);
								} else {
									handleBuyNow();
								}
							}}
						>
							{activeStep === data[nid].length - 1 ? "BUY NOW" : "NEXT"}
						</button>
					</div>
				</div>
			</div>
		</div>

		);
};

export default FlowerAura;
