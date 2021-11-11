import Chef from './components/Chef';
import ViewTitle from '../../components/Layout/ViewTitle';


export default function ChefsView() {
    return (
        <section id="team" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">

                    <ViewTitle
                        title="Meet our chefs"
                      subtitle="They are nice &amp; friendly"
                    />


                    <Chef
                        name="New Catherine"
                        position="Kitchen Officer"
                        description="Duis vel lacus id magna mattis vehicula"
                        imageUrl="/images/team-image1.jpg"
                    />

                    <Chef
                        name="Tsvetomira Kissyova"
                        position="Owner &amp; Manager"
                        description="Duis vel lacus id magna mattis vehicula"
                        imageUrl="/images/team-image3.jpg"
                    />

                    <Chef
                        name="Isabella Grace"
                        position="Pizza Specialist"
                        description="Etiam auctor enim tristique faucibus"
                        imageUrl="/images/team-image2.jpg"
                    />


                </div>
            </div>
        </section>
    );
}