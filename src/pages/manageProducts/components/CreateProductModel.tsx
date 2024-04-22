import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, createProduct } from '../../../store/product/productSlice';
import { AppDispatch, RootState } from '../../../store/store';
import { NewProductDT } from '../../../types/types';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-35%, -40%)',
    width: '70%',
    height: '500px',
    backgroundColor: '#0f172a',
  },
};

function CreateProductModel() {
  const [previewImage, setPreviewImage] = useState<string | ArrayBuffer | null>(
    null,
  );
  const [selectedImage, setSelectedImage] = useState<any>();
  const [newProduct, setNewProduct] = useState<NewProductDT>({
    productName: '',
    productImage: null,
    productPrice: 0,
    productDescription: '',
    productStock: 0,
  });

  const dispatch = useDispatch<AppDispatch>();

  const { isLoading, modalIsOpen } = useSelector(
    (state: RootState) => state.product,
  );

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  const handleCreateProduct = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const createProductData: { newProduct: NewProductDT; selectedImage: any } =
      {
        newProduct,
        selectedImage,
      };

    dispatch(createProduct(createProductData));

    await setNewProduct({
      productName: '',
      productImage: null,
      productPrice: 0,
      productDescription: '',
      productStock: 0,
    });
    await setPreviewImage('');
    await setSelectedImage('');
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => dispatch(closeModal())}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="all bg-fuchsia-200 w-full">
        <div className="overlay bg-slate-900 rounded-md absolute w-full lg:w-95% lgh-80vh mt-1">
          <div className="flex justify-end m-4">
            <button
              className="font-bold text-white mr-6"
              onClick={() => dispatch(closeModal())}
            >
              X
            </button>
          </div>
          <form onSubmit={handleCreateProduct}>
            <div className="flex flex-col flex-wrap items-center">
              <div className="m-6">
                <div className="flex gap-x-9 gap-y-4 flex-wrap">
                  <div className="flex flex-col">
                    <label htmlFor="productName">Product Name:</label>
                    <input
                      className="w-full sm:w-96 px-2 py-2 rounded-md outline-none mt-2 text-black-2"
                      type="text"
                      placeholder="product name"
                      id="productName"
                      name="productName"
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          productName: e.target.value,
                        })
                      }
                      value={newProduct.productName}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="productPrice">Product price:</label>
                    <input
                      className="w-full sm:w-96 px-2 py-2 rounded-md outline-none mt-2 text-black-2"
                      type="number"
                      id="productPrice"
                      name="productPrice"
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          productPrice: e.target.value,
                        })
                      }
                      value={newProduct.productPrice}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap mt-10 gap-x-10">
                  <div className="flex flex-col">
                    <label htmlFor="productDescription">
                      Product Description:
                    </label>
                    <textarea
                      className="w-full sm:w-96 h-100px px-2 py-2 rounded-md outline-none mt-2 text-black-2"
                      placeholder="product description"
                      id="productDescription"
                      name="productDescription"
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          productDescription: e.target.value,
                        })
                      }
                      value={newProduct.productDescription}
                    ></textarea>
                  </div>

                  <div className="flex flex-col">
                    <input
                      type="file"
                      id="productImage"
                      onChange={handleUpload}
                    />

                    {previewImage && typeof previewImage === 'string' && (
                      <img
                        src={previewImage}
                        alt="Preview"
                        className="w-25 lg:w-25 lg:h-[65px] p-1 rounded-xl object-cover mt-1"
                        id="product_img"
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-x-10 mt-10">
                  <div className="flex flex-col">
                    <label htmlFor="productStock">stock</label>
                    <input
                      className="w-full sm:w-96 py-2 px-2 rounded-md outline-none mt-2 text-black-2"
                      type="number"
                      id="productStock"
                      name="productStock"
                      onChange={(e) =>
                        setNewProduct({
                          ...newProduct,
                          productStock: e.target.value,
                        })
                      }
                      value={newProduct.productStock}
                    />
                  </div>
                </div>

                <div className="mt-10">
                  <button
                    disabled={isLoading}
                    className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                  >
                    {isLoading ? 'Creating...' : 'Create product'}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
}

export default CreateProductModel;
