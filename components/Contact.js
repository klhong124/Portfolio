import { useForm } from '@formspree/react';
import Icon from '@mdi/react'
import { mdiGithub, mdiWhatsapp, mdiGmail, mdiLinkedin } from '@mdi/js';

function MyForm() {
    const socials = [
        {
            icon: mdiLinkedin,
            href: "https://my.indeed.com/p/lokhongk-jm0z5xs",
        },
        {
            icon: mdiGmail,
            href: "mailto:klhong124@gmail.com",
        },
        {
            icon: mdiGithub,
            href: "https://github.com/klhong124",
        },
        {
            icon: mdiWhatsapp,
            href: "https://wa.me/447878154432",
        }
    ]

    const [state, handleSubmit] = useForm("xvolprkr");

    if (state.succeeded) {
        console.log(state);
    }
    return (
        <div>

            <div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
                <div class="bg-white w-full shadow rounded-xl p-8 sm:p-12 ">
                    <p class="text-3xl font-bold leading-7 text-center">Contact me</p>
                    <form onSubmit={handleSubmit}>
                        <div class="md:flex items-center mt-12">
                            <div class="w-full md:w-1/2 flex flex-col">
                                <label class="font-semibold leading-none">Name</label>
                                <input type="text" class=" input" name="name" />

                            </div>
                            <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label class="font-semibold leading-none">Email</label>
                                <input type="email" class=" input" name="email" />
                            </div>
                        </div>
                        <div class="md:flex items-center mt-8">
                            <div class="w-full flex flex-col">
                                <label class="font-semibold leading-none">Subject</label>
                                <input type="text" class=" input" name="subject" />
                            </div>

                        </div>
                        <div>
                            <div class="w-full flex flex-col mt-8">
                                <label class="font-semibold leading-none">Message</label>
                                <textarea type="text" class="h-40 text-base leading-none input" name="message"></textarea>
                            </div>
                        </div>
                        <div class="flex items-center justify-center w-full mt-7">
                            {state.submitting
                                ? <div class="flex items-center justify-center ">
                                    <div class="w-8 h-8 border-b-2 border-gray-900 rounded-full animate-spin"></div>
                                </div>
                                :
                                (state.succeeded
                                    ? <div className="font-semibold text-green-600"> "😻 Message sent. Please accept my deepest thanks."</div>
                                    : <button class="button">
                                        Send message
                                    </button>
                                )
                            }
                        </div>
                    </form>
                </div>
            </div>
            <div className="text-center text-gray-400">
                <div>

                    {
                        socials.map(({ icon, href }, i) =>
                            <button className="mx-2 "
                                key={i}
                                onClick={() => window.open(href)}
                                data-aos="flip-down"
                                data-aos-delay={i * 100}
                                data-aos-duration="200"
                            >
                                <Icon path={icon}
                                    size={1}
                                    color="white" />
                            </button>
                        )
                    }
                    <div >
                        <small>Ryan Kwan • Full-Stack Developer | UX Designer</small>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default MyForm
