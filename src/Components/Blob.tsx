import React, { DOMElement, ReactElement, ReactHTML, ReactNode, useEffect, useRef } from 'react'

type Props = {}

const random = (min: number, max: number) => Math.floor(min + Math.random() * (max - min));
const remain = (n: number) => 100 - n;
let offset = 25;

const getBlobStyle = () => {
	let r = [];
	for (let i = 0; i < 4; i++) {
		let n = random(offset, remain(offset));
		r.push(n);
		r.push(remain(n));
	}

	let coordinates = `${r[0]}% ${r[1]}% ${r[2]}% ${r[3]}% / ${r[4]}% ${r[6]}% ${r[7]}% ${r[5]}%`;

	return coordinates;
}

const colors = ['#B4121B', '#EF036C', '#C5ADC5', '#FFAB00', '#9C27B0', '#a1e0d6', '#D2FF72', '#187bcd', '#F05A7E'];

export default function Blob({ }: Props) {

	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const interval = setInterval(() => {
			if (ref.current) {
				ref.current.style.borderRadius = getBlobStyle();
				ref.current.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

			}
		}, 5000);

		return (() => {
			clearInterval(interval);
		})
	}, [])

	return (
		<div ref={ref} style={{ borderRadius: getBlobStyle() }} className='transition-all duration-2000 size-96 bg-purple-600 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-0'></div>
	)
}