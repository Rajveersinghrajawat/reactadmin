import { element } from 'prop-types'
import React from 'react'

const Login = React.lazy(()=> import('./views/pages/login/Login'))

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))







const Charts = React.lazy(() => import('./views/charts/Charts'))





const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

// Forget Password
const ForgetPassword = React.lazy(() => import('./views/pages/login/Forget'))

// Profile
const Profile = React.lazy(() => import('./views/Aboutus/About'))

// Size
const Size = React.lazy(() => import('./views/Size/Size'))
const ViewSize = React.lazy(() => import('./views/Size/Viewsize'))
const UpdateSize = React.lazy(() => import('./views/Size/UpdateSize'))

//Parent Category
const AddCategory = React.lazy(()=> import('./views/Parentcategory/AddCategory' ))
const ViewCategory = React.lazy(()=> import('./views/Parentcategory/ViewCategory' ))
const UpdateCategory = React.lazy(()=> import('./views/Parentcategory/UpdateCategory' ))

//Product Category
const ProductCategory = React.lazy(()=> import('./views/Prouductcategory/AddCategory' ))
const ViewProductCategory = React.lazy(()=> import('./views/Prouductcategory/ViewCategory' ))
const UpdateProductCategory = React.lazy(()=> import('./views/Prouductcategory/UpdateCategory' ))

// Product Items 
const Productitems = React.lazy(()=> import('./views/Product/addproduct' ))
const UpdateProduct = React.lazy(()=> import('./views/Product/Updateproduct' ))
const ViewProduct = React.lazy(()=> import('./views/Product/ViewProduct' ))

// Our Storys
const Story = React.lazy(()=> import('./views/OurStory/Story' ))
const StoryView = React.lazy(()=> import('./views/OurStory/OurStorys' ))
const UpdateStory = React.lazy(()=> import('./views/OurStory/UpdateStory' ))

//Orders
const Orders = React.lazy(()=> import('./views/Order/Orderlist'))

// Sliders
const SliderDetails = React.lazy(()=> import('./views/Sliders/Slider'))
const SliderView  = React.lazy(()=> import('./views/Sliders/SliderView'))
const SliderUpdate  = React.lazy(()=> import('./views/Sliders/SliderUpdate'))

const routes = [
  { path: '/login',  element: Login,  },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },

 
  { path: '/charts', name: 'Charts', element: Charts },
 

  { path: '/widgets', name: 'Widgets', element: Widgets },

  {path:'/profile', name: 'profile', element: Profile},



  {path:'/size/addsize', name: 'addsize', element: Size},
  {path:'/size/viewsize', name: 'viewsize', element: ViewSize},
  {path:'/size/updatesize', name: 'updatesize', element: UpdateSize},
  
  {path:'/parentcategory/addcategory', name: 'AddCategory', element: AddCategory},
  {path:'/parentcategory/viewcategory', name: 'ViewCategory', element: ViewCategory},
  {path:'/parentcategory/updatecategory', name: 'updateCategory', element: UpdateCategory},

  {path:'/productcategory/addcategory', name: 'AddCategory', element: ProductCategory},
  {path:'/productcategory/viewcategory', name: 'ViewCategory', element: ViewProductCategory},
  {path:'/productcategory/updatecategory', name: 'UpdateCategory', element: UpdateProductCategory},

  {path:'/product/addproduct', name: 'AddProduct', element: Productitems},
  {path:'/product/viewproduct', name: 'ViewProduct', element: ViewProduct},
  {path:'/product/updateproduct', name: 'UpdateProduct', element: UpdateProduct},

  {path:'/story/storydetails', name: 'Story', element: Story},
  {path:'/story/storyview', name: 'Story', element: StoryView},
  {path:'/story/updateview', name: 'UpdateStory', element: UpdateStory},

  {path:'/orders', name: 'Orders', element: Orders},

  {path:'/slider/sliderdetails', name: 'Slider Details', element: SliderDetails},
  {path:'/slider/viewslider', name: 'Slider View', element: SliderView},
  {path:'/slider/updateslider', name: 'Update Slider', element: SliderUpdate},

]

export default routes
