const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
	return (
		<div className='flex'>
            <div className="form-control">
                <label className="cursor-pointer label">
                    <span className="label-text">
                        Male
                    </span>
                    <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
                </label>
            </div>
            
		    <div className="form-control">
                <label className="cursor-pointer label">
                    <span className="label-text">
                        Female
                    </span>
                    <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
                </label>
            </div>
		</div>
	);
};
export default GenderCheckbox;

// STARTER CODE
// const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
// 	return (
// 		<div className='flex'>
//             <div className="form-control">
//                 <label className="cursor-pointer label">
//                     <span className="label-text">
//                         Male
//                     </span>
//                     <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
//                 </label>
//             </div>
            
// 		    <div className="form-control">
//                 <label className="cursor-pointer label">
//                     <span className="label-text">
//                         Female
//                     </span>
//                     <input type="checkbox" defaultChecked className="checkbox checkbox-success" />
//                 </label>
//             </div>
// 		</div>
// 	);
// };
// export default GenderCheckbox;
