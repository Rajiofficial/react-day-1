
function Cardcomponent({plan,price,user,storage,project,community,Private_Projects,support,domain,status_report}){
    return(
        <div
         classname="root">
{/* 
             <h3>{name}</h3>
             <h2>{description}</h2>
             <h1>{price}</h1>
             <button>add to cart</button> */}
             
                <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{plan}</h5>
            <h6 class="card-price text-center">${price}<span class="period">/month</span></h6>
        
            <ul class="fa-ul">
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{user}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{storage}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{project}</li>
              <li><span class="fa-li"><i class="fas fa-check"></i></span>{community}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>
                {Private_Projects}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{support}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{domain}</li>
              <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{status_report}</li>
            </ul>
            <div class="d-grid">
              <a href="#" class="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
             
        </div>
        
        
    )
}
export default Cardcomponent