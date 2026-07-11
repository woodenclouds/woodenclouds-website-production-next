import type { Metadata } from "next";
import Link from "next/link";
import { boardOfDirectors, teamMembers } from "@/data/team";
import { PageHeader } from "@/components/shared/PageBits";

export const metadata: Metadata = { title: "Behind Woodenclouds" };

export default function TeamPage() {
  return (
    <>
      <PageHeader subtitle="Our Team" title="Team Woodenclouds" />
      <section className="team section-padding">
        <div className="container">
          <div className="text-center mb-50">
            <Link href="/career" className="butn butn-md butn-bord radius-30">
              <span className="text">Join Our Team</span>
            </Link>
          </div>

          <h3 className="fw-300 mb-40">Board of Directors</h3>
          <div className="row mb-80">
            {boardOfDirectors.map((member) => (
              <div className="col-lg-4 col-md-6" key={member.name}>
                <div className="item mb-40 text-center">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="radius-10 mb-20"
                    style={{ width: "100%", aspectRatio: "1", objectFit: "cover" }}
                  />
                  <h5 className="fw-300">{member.name}</h5>
                </div>
              </div>
            ))}
          </div>

          <h3 className="fw-300 mb-40">Our Team</h3>
          <div className="row">
            {teamMembers.map((member) => (
              <div className="col-lg-3 col-md-6" key={member.name}>
                <div className="item mb-40 text-center">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="radius-10 mb-20"
                    style={{ width: "100%", aspectRatio: "1", objectFit: "cover" }}
                  />
                  <h6 className="fw-300">{member.name}</h6>
                  {member.role && <p className="fz-14 opacity-7">{member.role}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
