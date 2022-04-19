import { Icon_close } from "../../assets";

const ListModal = ({ setListModal, listModal }) => {
  console.log(listModal);
  return (
    <div
      class="modal fade fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto
                      flex flex-row items-center justify-center 
                    "
      id="exampleModalCenter"
      tabIndex="-1"
      aria-labelledby="exampleModalCenterTitle"
      aria-modal="true"
      role="dialog"
    >
      <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none ">
        <div class="modal-content border-none shadow-lg relative flex flex-col w-56 pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
          <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
            <h5
              class="text-xl font-medium leading-normal text-gray-800"
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
          <div class="modal-body relative p-4">
            {listModal.list.length === 0 && <p>{"Zero " + listModal.title}</p>}
            {listModal.list.map((item) => (
              <h1>List item</h1>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ListModal };
