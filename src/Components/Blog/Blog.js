import React from 'react';

const Blog = () => {
    return (
        <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-6 lg:w-3/4 sm:w-full mx-auto rounded-lg mt-5">
            <div className=''>
                <h2 className='text-4xl font-bold'>What is cors?</h2>
                <p className='text-2xl'>Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).</p>
            </div>
            <div className=''>
                <h2 className='text-4xl font-bold'>Why are using firebase?What other Options do you have ti implement authentication</h2>
                <p className='text-2xl'>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. Options are Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.</p>
            </div>
            <div className=''>
                <h2 className='text-4xl font-bold'>How does the Private Route?</h2>
                <p className='text-2xl'>he private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated.</p>
            </div>
            <div className=''>
                <h2 className='text-4xl font-bold p-3'>What is node?How Dose Node Work?</h2>
                <p className='text-2xl'>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return</p>
            </div>
        </div>

    );
};

export default Blog;