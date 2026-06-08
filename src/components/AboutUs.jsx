import React from "react";

const AboutSchool = () => {
    return (
        <section className="bg-white py-16 px-6 md:px-20">
            <div className="max-w-6xl mx-auto text-center">

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    About Our School
                </h2>

                {/* Description */}
                <p className="text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                    Our school is committed to providing quality education and building a strong
                    foundation for students’ future. We focus on academic excellence, discipline,
                    and modern learning methods to help students grow intellectually and morally.
                </p>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-6">

                    <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-bold text-blue-600 mb-2">Quality Education</h3>
                        <p className="text-gray-600">
                            We provide a strong academic curriculum designed to improve knowledge and skills.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-bold text-blue-600 mb-2">Experienced Teachers</h3>
                        <p className="text-gray-600">
                            Our teachers are highly qualified and dedicated to student success.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
                        <h3 className="text-xl font-bold text-blue-600 mb-2">Modern Facilities</h3>
                        <p className="text-gray-600">
                            We use modern technology and smart systems for better learning experience.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSchool;