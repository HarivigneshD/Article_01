import {useState} from 'react';
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  FilePenLine,
  Users,
  TrendingUp,
  ArrowRight,
  Leaf,
} from "lucide-react";

function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
    });

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      console.log("Signup Details", formData);
    };

    const features = [

      {
        icon: FilePenLine,
        title: "Publish your research",
        description: "Turn you ideas, findings and breakthroughs into a well-crafted articles.",
      },

      {
        icon: Users,
        title: "Connect with curious minds",
        description: "Engage with a global community of biotech enthusiasts, researchers, and experts.",
      },

      {
        icon: TrendingUp,
        title: "Grow Scientific Impact",
        description: "Get your work seen, cited and make a difference in the world of biotechnology.",
      },
    ];

      return (
    <div className="min-h-screen bg-[#f7f9f8] p-0 md:p-5 lg:p-8">
      <div className="mx-auto flex min-h-[calc(100vh-40px)] max-w-[1500px] overflow-hidden bg-white shadow-2xl md:rounded-2xl">

        {/* Left Side */}
        <section className="relative hidden w-1/2 overflow-hidden bg-[#06283d] text-white lg:flex">
          
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/Images/Signup UI.png')",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#061f35]/95 via-[#062c43]/85 to-[#007f7b]/50" />

          {/* Content */}
          <div className="relative z-10 flex w-full flex-col px-12 py-12 xl:px-16 xl:py-14">

            {/* Logo */}
            <div className="mb-14 flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#17cbb2]/10 text-[#52e6cb]">
                <Leaf size={36} strokeWidth={2.2} />
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight">
                Bio<span className="text-[#40ddc2]">Hub</span>
              </h1>
            </div>

           
            <div className="max-w-xl">
              <h2 className="text-5xl font-extrabold leading-[1.13] xl:text-6xl">
                Ideas that
                <br />
                <span className="bg-gradient-to-r from-[#45e2c5] to-[#b4f4a6] bg-clip-text text-transparent">
                  grow
                </span>{" "}
                life.
              </h2>

              <p className="mt-7 max-w-lg text-lg leading-8 text-slate-200 xl:text-xl">
                Share your biotechnology research, discoveries and insights
                with a global community of researchers, students and industry
                professionals.
              </p>
            </div>

            {/* Features */}
            <div className="mt-12 space-y-8 xl:mt-14 xl:space-y-10">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={index}
                    className="flex items-center gap-6"
                  >
                    <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full border-2 border-[#35d9c2] bg-[#0b5360]/20 text-[#63e8d0]">
                      <Icon size={32} strokeWidth={1.7} />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold xl:text-2xl">
                        {feature.title}
                      </h3>
                      <p className="mt-2 max-w-md text-base leading-6 text-slate-300 xl:text-lg">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            
           
          </div>
        </section>

        {/* Right Side */}
        <section className="flex w-full items-center justify-center bg-white px-6 py-12 sm:px-12 lg:w-1/2 lg:px-14 xl:px-20">
          <div className="w-full max-w-[600px]">

            {/* Mobile logo */}
            <div className="mb-10 flex items-center gap-2 lg:hidden">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e1f8f2] text-[#079b8c]">
                <Leaf size={28} />
              </div>
              <h1 className="text-3xl font-extrabold text-[#12334a]">
                Bio<span className="text-[#079b8c]">Hub</span>
              </h1>
            </div>

            {/* Form heading */}
            <div className="mb-10">
              <h2 className="text-3xl font-extrabold tracking-tight text-[#17364a] sm:text-4xl">
                Create your BioHub account
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-500 sm:text-lg">
                Join a community shaping the future of biotechnology.
              </p>
            </div>

            {/* Signup form */}
            <form onSubmit={handleSubmit} className="space-y-7">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-3 block text-base font-semibold text-[#19394e]"
                >
                  Name
                </label>

                <div className="relative">
                  <User
                    size={21}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
                  />
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    className="h-[60px] w-full rounded-xl border border-[#cbd9df] bg-[#fcfdfd] pl-16 pr-5 text-base text-[#17364a] outline-none transition placeholder:text-gray-400 focus:border-[#0d9e91] focus:ring-4 focus:ring-[#0d9e91]/10"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-3 block text-base font-semibold text-[#19394e]"
                >
                  Email address
                </label>

                <div className="relative">
                  <Mail
                    size={21}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
                  />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-[60px] w-full rounded-xl border border-[#cbd9df] bg-[#fcfdfd] pl-16 pr-5 text-base text-[#17364a] outline-none transition placeholder:text-gray-400 focus:border-[#0d9e91] focus:ring-4 focus:ring-[#0d9e91]/10"
                  />
                </div>
              </div>

              
              <div>
                <label
                  htmlFor="password"
                  className="mb-3 block text-base font-semibold text-[#19394e]"
                >
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={20}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500"
                  />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    minLength={8}
                    autoComplete="new-password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    className="h-[60px] w-full rounded-xl border border-[#cbd9df] bg-[#fcfdfd] pl-16 pr-14 text-base text-[#17364a] outline-none transition placeholder:text-gray-400 focus:border-[#0d9e91] focus:ring-4 focus:ring-[#0d9e91]/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-[#078f83]"
                  >
                    {showPassword ? (
                      <EyeOff size={21} />
                    ) : (
                      <Eye size={21} />
                    )}
                  </button>
                </div>
                <p className="mt-2 text-xs text-gray-400">
                  Use at least 8 characters.
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex h-[60px] w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#087f79] to-[#079d91] text-lg font-bold text-white shadow-md shadow-teal-900/10 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-900/20 active:translate-y-0"
              >
                Create account
                <ArrowRight size={22} />
              </button>

              {/* Privacy */}
              <p className="flex items-center justify-center gap-2 text-center text-sm text-gray-500">
                <Lock size={15} className="text-[#527487]" />
                Your information is safe and we never share it.
              </p>
            </form>

            {/* Divider */}
            <div className="my-9 flex items-center gap-5">
              <div className="h-px flex-1 bg-[#d5e1e5]" />
              <span className="text-base text-gray-500">or</span>
              <div className="h-px flex-1 bg-[#d5e1e5]" />
            </div>

            
            <button
              type="button"
              className="flex h-[58px] w-full items-center justify-center gap-3 rounded-xl border border-[#cbd9df] bg-white text-base font-medium text-[#243b4a] transition hover:bg-gray-50 hover:shadow-sm"
              onClick={() => {
                // window.location.href = "/auth/google";
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  fill="#FFC107"
                  d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11c-.5 2.5-1.9 4.6-4.1 6v5.1h6.6c3.9-3.6 6.1-8.8 6.1-14.8z"
                />
                <path
                  fill="#34A853"
                  d="M24 44c5.5 0 10.1-1.8 13.5-4.8l-6.6-5.1c-1.8 1.2-4.1 2-6.9 2-5.3 0-9.8-3.6-11.4-8.4H5.8v5.3C9.2 39.5 16 44 24 44z"
                />
                <path
                  fill="#4A90E2"
                  d="M12.6 27.7a12 12 0 0 1 0-7.4V15H5.8a20 20 0 0 0 0 18l6.8-5.3z"
                />
                <path
                  fill="#EA4335"
                  d="M24 12.1c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 6.1 29.5 4 24 4 16 4 9.2 8.5 5.8 15l6.8 5.3c1.6-4.8 6.1-8.2 11.4-8.2z"
                />
              </svg>
              Continue with Google
            </button>

            {/* Login */}
            <p className="mt-8 text-center text-base text-[#526777]">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-bold text-[#078f83] underline underline-offset-4 transition hover:text-[#05665f]"
              >
                Log in
              </a>
            </p>

          </div>
        </section>
      </div>
    </div>
  );
}

export default Signup;