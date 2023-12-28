interface TeaDetailsProps {
    onClose: () => void;
}
function TeaItem(props:TeaDetailsProps){

    return (
        <div className={'w-full h-screen bg-white p-4'}>
            {/* Add your detailed tea information here */}
            <h1 className={'text-2xl font-bold mb-4'}>Tea Details</h1>

            {/* TeaItem component */}
          {/*  <TeaItem />*/}

            {/* Close button */}
            <button onClick={props.onClose} className={'bg-blue-500 text-white px-4 py-2 rounded'}>
                Close
            </button>
        </div>
    );

}
export default TeaItem;