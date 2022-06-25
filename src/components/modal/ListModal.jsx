import { Icon_close } from "../../assets";

const ListModal = ({ setListModal, listModal }) => {
  return (
    <div
      className="modal fade fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto
                      flex flex-row items-center justify-center z-20
                    "
      id="exampleModalCenter"
      tabIndex="-1"
      aria-labelledby="exampleModalCenterTitle"
      aria-modal="true"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none ">
        <div className="border modal-content border-none shadow-lg relative flex flex-col w-64 pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <h5
              className="text-xl font-medium leading-normal text-gray-800"
              id="exampleModalScrollableLabel"
            >
              {listModal.title}
            </h5>
            <button>
              <img
                className="p-1 border rounded-full"
                onClick={() =>
                  setListModal((prev) => ({ ...prev, showList: false }))
                }
                src={Icon_close}
                alt="close"
              />
            </button>
          </div>
          <div className="modal-body relative">
            {listModal.list.length === 0 && (
              <p className="border-b w-full p-4">{"Zero " + listModal.title}</p>
            )}
            {listModal.list.map((user, index) => (
              <h1 className="border-b w-full p-4" key={index}>
                {user.firstName + " " + user.lastName + " @" + user.username}
              </h1>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ListModal };
