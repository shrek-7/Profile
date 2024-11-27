import React from 'react'

type Props = {}

export default function Header({ }: Props) {
	return (
		<div className='p-10 text-left border-b border-gray-400'>
			<div className='text-lg font-bold items-center flex'>
				<p>Shrek <span className='text-3xl font-bold text-purple-400'>.</span></p>
				{/* <p className='ml-2 w-1 h-1 rounded-full bg-purple-400'></p> */}
			</div>
		</div>
	)
}