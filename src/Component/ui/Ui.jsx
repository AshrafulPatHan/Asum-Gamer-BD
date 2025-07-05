import './ui.css'

const Ui = () => {
    return (
        <div className='flex flex-col items-center mt-10'>
            <div className='bg-white w-full h-auto flex flex-col items-center gap-6'>
                <h2 className='text-5xl font-bold'>Light Mode</h2>
                    <h3 className='text-2xl font-bold'>Text</h3>
                <div>
                    <div>
                        <h2 className='text-[40px] font-bold'>heading</h2>
                        <h2 className='text-4xl font-bold'>heading</h2>
                        <h2 className='text-3xl font-bold'>heading</h2>
                        <h2 className='text-2xl font-bold'>heading</h2>
                    </div>
                    <div>
                        <p className='text-xl font-bold'>paragraph</p>
                        <p className='text-lg font-bold'>paragraph</p>
                        <p className='text-md font-bold'>paragraph</p>
                        <p className='text-sm font-bold'>paragraph</p>
                        <p className='text-xs font-bold'>paragraph</p>
                    </div>
                </div>
                    <h3 className='text-2xl mb-4 font-bold'>Color</h3>
                <div className='flex '>
                    <div>
                        <div className='p-20 bg-yellow-900 '><p>#1(yellow)</p></div>
                        <div className='p-20 bg-yellow-800 '><p>#2</p></div>
                        <div className='p-20 bg-yellow-700 '><p>#3</p></div>
                        <div className='p-20 bg-yellow-600 '><p>#4</p></div>
                        <div className='p-20 bg-yellow-500 '><p>#5</p></div>
                        <div className='p-20 bg-yellow-400 '><p>#6</p></div>
                        <div className='p-20 bg-yellow-300 '><p>#7</p></div>
                        <div className='p-20 bg-yellow-200 '><p>#8</p></div>
                        <div className='p-20 bg-yellow-100 '><p>#9</p></div>
                    </div>
                    <div>
                        <div className='p-20 bg-blue-900 '><p>#1(blue)</p></div>
                        <div className='p-20 bg-blue-800 '><p>#2</p></div>
                        <div className='p-20 bg-blue-700 '><p>#3</p></div>
                        <div className='p-20 bg-blue-600 '><p>#4</p></div>
                        <div className='p-20 bg-blue-500 '><p>#5</p></div>
                        <div className='p-20 bg-blue-400 '><p>#6</p></div>
                        <div className='p-20 bg-blue-300 '><p>#7</p></div>
                        <div className='p-20 bg-blue-200 '><p>#8</p></div>
                        <div className='p-20 bg-blue-100 '><p>#9</p></div>
                    </div> 
                    <div>
                        <div className='p-20 bg-slate-900 '><p>#1(slate)</p></div>
                        <div className='p-20 bg-slate-800 '><p>#2</p></div>
                        <div className='p-20 bg-slate-700 '><p>#3</p></div>
                        <div className='p-20 bg-slate-600 '><p>#4</p></div>
                        <div className='p-20 bg-slate-500 '><p>#5</p></div>
                        <div className='p-20 bg-slate-400 '><p>#6</p></div>
                        <div className='p-20 bg-slate-300 '><p>#7</p></div>
                        <div className='p-20 bg-slate-200 '><p>#8</p></div>
                        <div className='p-20 bg-slate-100 '><p>#9</p></div>
                    </div>
                </div>
                <div>
                    <h3 className='text-2xl font-bold'>Button</h3>
                </div>
            </div> 
            <div className='bg-black p-6 text-white w-full h-auto flex flex-col items-center gap-6'>
                <h2 className='text-5xl font-bold'>Dark Mode</h2>
                <div >
                    <h3 className='text-2xl font-bold'>Text</h3>
                </div>
                    <h3 className='text-2xl mb-4 font-bold'>Color</h3>
                <div className='flex'>
                   <div>
                        <div className='p-20 bg-slate-900 '><p>#1(slate)</p></div>
                        <div className='p-20 bg-slate-800 '><p>#2</p></div>
                        <div className='p-20 bg-slate-700 '><p>#3</p></div>
                        <div className='p-20 bg-slate-600 '><p>#4</p></div>
                        <div className='p-20 bg-slate-500 '><p>#5</p></div>
                    </div>
                    <div>
                        <div className='p-20 bg-stone-900 '><p>#1(stone)</p></div>
                        <div className='p-20 bg-stone-800 '><p>#2</p></div>
                        <div className='p-20 bg-stone-700 '><p>#3</p></div>
                        <div className='p-20 bg-stone-600 '><p>#4</p></div>
                        <div className='p-20 bg-stone-500 '><p>#5</p></div>
                    </div>
                    <div>
                        <div className='p-20 bg-[#000000] '><p>#1(#000000)</p></div>
                        <div className='p-20 bg-[#0d0d0d] '><p>#2(#0d0d0d)</p></div>
                        <div className='p-20 bg-[#1a1a1a] '><p>#3(#1a1a1a)</p></div>
                        <div className='p-20 bg-[#262626] '><p>#4(#262626)</p></div>
                        <div className='p-20 bg-[#333333] '><p>#5(#333333)</p></div>
                    </div>
                </div>
                <div>
                    <h3 className='text-2xl font-bold'>Button</h3>
                </div>
            </div>
            
        </div>
    );
};

export default Ui;