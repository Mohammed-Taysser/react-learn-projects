import React from 'react';
import {
  useIceCreams,
  useCakes,
  useMolto,
} from '../../../redux/selectors/cakes';
import {
  BuyCake,
  BuyIceCream,
  BuyMolto,
  BakeCake,
  BakeIceCream,
  BakeMolto,
} from '../../../redux/actions/cakes';
import { useDispatch } from 'react-redux';

const availability_status = (num) => {
  if (num >= 20) {
    return 'success';
  } else if (num >= 10 && num < 20) {
    return 'primary';
  } else if (num >= 5 && num < 10) {
    return 'warning';
  } else {
    return 'danger';
  }
};

const Btn = (props) => {
  const { variant = 'primary', label = 'title' } = props;
  return (
    <button className={`btn btn-${variant} mx-2`} {...props}>
      {label}
    </button>
  );
};

const Alert = (props) => {
  const { num = 0, label = 'title' } = props;
  return (
    <div
      className={`mb-0 alert alert-${availability_status(num)}`}
      role='alert'
    >
      <h3 className='m-0'>
        {label} {num}
      </h3>
    </div>
  );
};

function CakeShop() {
  const cakesNumber = useCakes();
  const iceCreamsNumber = useIceCreams();
  const moltoNumber = useMolto();
  const dispatch = useDispatch();

  const onBuyCakeClick = () => {
    if (cakesNumber > 0) {
      dispatch(BuyCake());
    }
  };

  const onBuyIceCreamClick = () => {
    if (iceCreamsNumber > 0) {
      dispatch(BuyIceCream());
    }
  };

  const onBuyMoltoClick = () => {
    if (iceCreamsNumber > 0) {
      dispatch(BuyMolto());
    }
  };

  const onBakeCakeClick = () => {
    dispatch(BakeCake());
  };

  const onBakeIceCreamClick = () => {
    dispatch(BakeIceCream());
  };

  const onBakeMoltoClick = () => {
    dispatch(BakeMolto());
  };

  return (
    <section>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-4 my-3'>
            <Alert num={cakesNumber} label={'cakes'} />
          </div>
          <div className='col-md-4 my-3'>
            <Alert num={moltoNumber} label={'molto'} />
          </div>
          <div className='col-md-4 my-3'>
            <Alert num={iceCreamsNumber} label={'ice creams'} />
          </div>
          <div className='col-12 my-3'>
            <div className='d-flex justify-content-around align-items-center'>
              <div className=''>
                <Btn onClick={onBuyCakeClick} label={'Buy cakes'} />
                <Btn onClick={onBuyIceCreamClick} label={'Buy ice creams'} />
                <Btn onClick={onBuyMoltoClick} label={'Buy molto'} />
              </div>
              <div className=''>
                <Btn
                  variant='warning'
                  onClick={onBakeCakeClick}
                  label={'Add cakes'}
                />
                <Btn
                  variant='warning'
                  onClick={onBakeIceCreamClick}
                  label={'Add ice creams'}
                />
                <Btn
                  variant='warning'
                  onClick={onBakeMoltoClick}
                  label={'Add molto'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CakeShop;
