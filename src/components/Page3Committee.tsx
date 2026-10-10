import React, { useState } from 'react';
import { Shield, Phone, Mail, Award, Users, HeartHandshake, CheckCircle2, Hammer, UserCheck } from 'lucide-react';
import {
  COMMITTEE_MEMBERS,
  COMMITTEE_METADATA,
  CommitteeMember,
  EXECUTIVE_BODY_NAMES,
  MANAGEMENT_BODY_NAMES,
  SPECIAL_ASSISTANCE_NAMES,
  AUDITORS_NAMES,
} from '../data/committeeMembers';
import { AlpanaBadge } from './AlpanaBadge';

export const Page3Committee: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [volunteerSubmitted, setVolunteerSubmitted] = useState<boolean>(false);
  const [volunteerName, setVolunteerName] = useState<string>('');
  const [volunteerPhone, setVolunteerPhone] = useState<string>('');

  const filteredMembers = COMMITTEE_MEMBERS.filter((m) => {
    if (filter === 'all') return true;
    return m.roleGroup === filter;
  });

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!volunteerName.trim() || !volunteerPhone.trim()) return;
    setVolunteerSubmitted(true);
  };

  return (
    <section id="page-committee" style={{ padding: '6rem 0', position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
            <AlpanaBadge size={32} petals={12} rings={2} color="#ffd98a" strokeWidth={1.5} />
            <span className="section-tag">৩য় অধ্যায় · সেবাকর্মে নিয়োজিত প্রাণ</span>
            <AlpanaBadge size={32} petals={12} rings={2} color="#ffd98a" strokeWidth={1.5} />
          </div>
          <h2 className="section-title font-bn">পরিচালন সমিতি ও কার্যনির্বাহী পরিষদ</h2>
          <p className="section-desc">
            যাঁদের নিঃস্বার্থ পরিশ্রম, নিষ্ঠা ও নিরলস ভালোবাসায় ৭০তম বর্ষে (১৯৫৬ - ২০২৬) সার্থক রূপ পাচ্ছে আমাদের শারদোৎসব।
          </p>
        </div>

        {/* Committee Filter Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.65rem',
            marginBottom: '3rem',
          }}
        >
          {[
            { id: 'all', labelBn: 'সকল কর্মকর্তা (All)', labelEn: 'All Members' },
            { id: 'leadership', labelBn: 'শীর্ষ নেতৃত্ব (Leadership)', labelEn: 'President, Sec, Treasurer' },
            { id: 'advisory', labelBn: 'উপদেষ্টা পরিষদ (Advisory)', labelEn: 'Advisory Wing' },
            { id: 'cultural', labelBn: 'পূজা ও সংস্কৃতি (Puja & Cultural)', labelEn: 'Priest & Cultural' },
          ].map((tab) => {
            const isActive = filter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`btn ${isActive ? 'btn-primary' : 'btn-ghost'}`}
                style={{ fontSize: '0.88rem', padding: '0.55rem 1.35rem' }}
              >
                <span className="font-bn">{tab.labelBn}</span>
              </button>
            );
          })}
        </div>

        {/* Leadership Members Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            marginBottom: '4.5rem',
          }}
        >
          {filteredMembers.map((member: CommitteeMember) => (
            <div
              key={member.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top Accent Stripe */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: member.roleGroup === 'leadership'
                    ? 'linear-gradient(90deg, #ffd98a, #c9a24b)'
                    : member.roleGroup === 'advisory'
                    ? 'linear-gradient(90deg, #ff9d5c, #b3261e)'
                    : 'linear-gradient(90deg, #b3261e, #ffd98a)',
                }}
              />

              <div>
                {/* Header Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <span className="badge-gold">
                    <Award size={13} />
                    <span className="font-bn">{member.badgeBn}</span>
                  </span>

                  <span className="font-ui" style={{ fontSize: '0.82rem', color: 'var(--paper-muted)' }}>
                    অভিজ্ঞতা: {member.experienceYears} বছর
                  </span>
                </div>

                {/* Name & Designation */}
                <h3 className="font-bn" style={{ fontSize: '1.5rem', color: 'var(--cream)', fontWeight: 600, marginBottom: '0.2rem' }}>
                  {member.nameBn}
                </h3>
                <span className="font-ui" style={{ fontSize: '0.9rem', color: 'var(--gold-light)', display: 'block', marginBottom: '0.5rem' }}>
                  {member.nameEn}
                </span>

                <span
                  className="font-bn"
                  style={{
                    display: 'inline-block',
                    fontSize: '1rem',
                    color: '#ff9d5c',
                    fontWeight: 500,
                    marginBottom: '1rem',
                    padding: '0.2rem 0.6rem',
                    background: 'rgba(179, 38, 30, 0.15)',
                    borderRadius: '4px',
                  }}
                >
                  {member.designationBn}
                </span>

                {/* Personal Philosophy / Quote */}
                <blockquote
                  className="font-display"
                  style={{
                    fontSize: '1.1rem',
                    fontStyle: 'italic',
                    color: 'var(--paper-soft)',
                    borderLeft: '2px solid rgba(201, 162, 75, 0.4)',
                    paddingLeft: '0.85rem',
                    margin: '0.75rem 0 1.25rem',
                    lineHeight: 1.6,
                  }}
                >
                  “{member.quoteBn}”
                </blockquote>
              </div>

              {/* Direct Contact Links */}
              <div
                style={{
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--ink-border)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  fontSize: '0.85rem',
                  fontFamily: 'var(--font-ui)',
                }}
              >
                {member.phone && (
                  <a
                    href={`tel:${member.phone.replace(/\s+/g, '')}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: 'var(--paper-muted)',
                      textDecoration: 'none',
                    }}
                    className="hover-gold"
                  >
                    <Phone size={14} color="#ffd98a" />
                    <span>{member.phone}</span>
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      color: 'var(--paper-muted)',
                      textDecoration: 'none',
                    }}
                    className="hover-gold"
                  >
                    <Mail size={14} color="#ffd98a" />
                    <span>{member.email}</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Official 2026 Wings: Executive Committee, Management & Artisan Partners */}
        <div style={{ marginBottom: '4.5rem' }}>
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <h3 className="font-bn" style={{ fontSize: '1.85rem', color: 'var(--cream)', marginBottom: '0.5rem', textAlign: 'center' }}>
              সন ১৪৩৩ (ইং ২০২৬) কার্যকরী মণ্ডলী ও পরিচালন সহযোগী
            </h3>
            <p className="font-bn" style={{ fontSize: '0.95rem', color: 'var(--paper-muted)', textAlign: 'center', marginBottom: '2.5rem' }}>
              কমিটির অফিসিয়াল নথিপত্র অনুসারে উৎসব সুসম্পন্নকারী সকল দায়িত্বশীল সদস্যবৃন্দ:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {/* Executive Body Column */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#ffd98a' }}>
                  <Users size={20} />
                  <h4 className="font-bn" style={{ fontSize: '1.25rem', color: 'var(--cream)' }}>
                    কার্যকরী মণ্ডলী (Executive Body)
                  </h4>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {EXECUTIVE_BODY_NAMES.map((name, i) => (
                    <span
                      key={i}
                      className="font-bn"
                      style={{
                        padding: '0.35rem 0.75rem',
                        background: 'rgba(7, 9, 21, 0.6)',
                        border: '1px solid rgba(201, 162, 75, 0.25)',
                        borderRadius: '6px',
                        fontSize: '0.88rem',
                        color: 'var(--paper)',
                      }}
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Management & Special Assistance Column */}
              <div>
                <div style={{ marginBottom: '1.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem', color: '#ffd98a' }}>
                    <UserCheck size={20} />
                    <h4 className="font-bn" style={{ fontSize: '1.25rem', color: 'var(--cream)' }}>
                      সর্বব্যবস্থাপনায় (Management)
                    </h4>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {MANAGEMENT_BODY_NAMES.map((name, i) => (
                      <span
                        key={i}
                        className="font-bn"
                        style={{
                          padding: '0.35rem 0.75rem',
                          background: 'rgba(7, 9, 21, 0.6)',
                          border: '1px solid rgba(255, 157, 92, 0.3)',
                          borderRadius: '6px',
                          fontSize: '0.88rem',
                          color: 'var(--paper)',
                        }}
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem', color: '#ffd98a' }}>
                    <Shield size={20} />
                    <h4 className="font-bn" style={{ fontSize: '1.25rem', color: 'var(--cream)' }}>
                      বিশেষ সহযোগিতা ও হিসাব নিরীক্ষা
                    </h4>
                  </div>
                  <p className="font-bn" style={{ fontSize: '0.9rem', color: 'var(--paper-muted)', marginBottom: '0.5rem' }}>
                    <strong>সহযোগিতা:</strong> {SPECIAL_ASSISTANCE_NAMES.join(', ')}
                  </p>
                  <p className="font-bn" style={{ fontSize: '0.9rem', color: 'var(--paper-muted)' }}>
                    <strong>হিসাব পরীক্ষক:</strong> {AUDITORS_NAMES.join(', ')}
                  </p>
                </div>
              </div>

              {/* Artisan Vendors Column */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#ffd98a' }}>
                  <Hammer size={20} />
                  <h4 className="font-bn" style={{ fontSize: '1.25rem', color: 'var(--cream)' }}>
                    কারিগর ও রূপকার পরিষদ
                  </h4>
                </div>
                <div style={{ display: 'grid', gap: '0.75rem' }}>
                  <div style={{ padding: '0.75rem', background: 'rgba(7, 9, 21, 0.6)', borderRadius: '6px', border: '1px solid var(--ink-border)' }}>
                    <span className="font-bn" style={{ fontSize: '0.8rem', color: 'var(--gold-light)', display: 'block' }}>মণ্ডপ সজ্জা:</span>
                    <strong className="font-bn" style={{ color: 'var(--cream)', fontSize: '0.95rem' }}>{COMMITTEE_METADATA.pandalVendorBn}</strong>
                  </div>
                  <div style={{ padding: '0.75rem', background: 'rgba(7, 9, 21, 0.6)', borderRadius: '6px', border: '1px solid var(--ink-border)' }}>
                    <span className="font-bn" style={{ fontSize: '0.8rem', color: 'var(--gold-light)', display: 'block' }}>আলোক সজ্জা:</span>
                    <strong className="font-bn" style={{ color: 'var(--cream)', fontSize: '0.95rem' }}>{COMMITTEE_METADATA.lightingVendorBn}</strong>
                  </div>
                  <div style={{ padding: '0.75rem', background: 'rgba(7, 9, 21, 0.6)', borderRadius: '6px', border: '1px solid var(--ink-border)' }}>
                    <span className="font-bn" style={{ fontSize: '0.8rem', color: 'var(--gold-light)', display: 'block' }}>প্রতিমা শিল্পী:</span>
                    <strong className="font-bn" style={{ color: 'var(--cream)', fontSize: '0.95rem' }}>{COMMITTEE_METADATA.idolArtistBn}</strong>
                  </div>
                  <div style={{ padding: '0.75rem', background: 'rgba(7, 9, 21, 0.6)', borderRadius: '6px', border: '1px solid var(--ink-border)' }}>
                    <span className="font-bn" style={{ fontSize: '0.8rem', color: 'var(--gold-light)', display: 'block' }}>পুরোহিত মহাশয়:</span>
                    <strong className="font-bn" style={{ color: 'var(--cream)', fontSize: '0.95rem' }}>{COMMITTEE_METADATA.priestsBn}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* In Memoriam / স্মরণ Block from 3.jpeg */}
            <div
              style={{
                marginTop: '2.5rem',
                paddingTop: '1.75rem',
                borderTop: '1px solid rgba(201, 162, 75, 0.25)',
                textAlign: 'center',
              }}
            >
              <span className="badge-sindoor" style={{ marginBottom: '0.5rem' }}>
                স্মরণ · চিরন্তন শ্রদ্ধার্ঘ্য
              </span>
              <p className="font-bn" style={{ fontSize: '0.98rem', color: 'var(--paper-muted)', maxWidth: '750px', margin: '0 auto', lineHeight: 1.75 }}>
                “আজকের এই আনন্দমুখর উৎসবের দিনে বারবার মনে পড়ে সেই সব ব্যক্তিত্বকে যাঁরা নিয়তির নিষ্ঠুর বিধানে আজ আর আমাদের মধ্যে নেই, তাঁদের অকুণ্ঠ সাহচর্যলাভে আমরা হয়েছি চিরতরে বঞ্চিত। শোকস্তব্ধ হৃদয়ে এদের পরিবারবর্গকে জানাই আমাদের আন্তরিক সমবেদনা। পূজাকমিটি সর্বশক্তিমান ঈশ্বরের কাছে তাঁদের বিদেহী আত্মার চিরশান্তি কামনা করি।”
              </p>
              <span className="font-bn" style={{ display: 'block', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--gold-light)' }}>
                — পূজা কমিটি ২০২৬
              </span>
            </div>
          </div>
        </div>

        {/* Volunteer Callout Box & Control Room Helpline */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {/* Volunteer Sign-up Card */}
          <div className="glass-card-sindoor" style={{ padding: '2.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Users size={28} color="#ffd98a" />
              <div>
                <h3 className="font-bn" style={{ fontSize: '1.5rem', color: 'var(--cream)', fontWeight: 600 }}>
                  দুয়েরপল্লী যুব সেবা দলে যোগ দিন
                </h3>
                <span className="font-ui" style={{ fontSize: '0.85rem', color: '#ffb4a8' }}>
                  Join Duyerpally Youth Wing 2026
                </span>
              </div>
            </div>

            <p className="font-bn" style={{ fontSize: '0.98rem', color: 'var(--paper-muted)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              দর্শনার্থীদের শৃঙ্খলা রক্ষা, প্রবীণ ও বিশেষ চাহিদাসম্পন্ন ব্যক্তিদের সাহায্য এবং মণ্ডপ পরিচ্ছন্নতায়
              আমাদের তরুণ স্বেচ্ছাসেবক দলের গর্বিত সদস্য হোন।
            </p>

            {volunteerSubmitted ? (
              <div style={{ padding: '1.25rem', background: 'rgba(201, 162, 75, 0.15)', borderRadius: '8px', border: '1px solid #ffd98a' }}>
                <CheckCircle2 size={24} color="#ffd98a" style={{ marginBottom: '0.5rem' }} />
                <h4 className="font-bn" style={{ fontSize: '1.15rem', color: 'var(--cream)' }}>
                  ধন্যবাদ, {volunteerName}!
                </h4>
                <p className="font-bn" style={{ fontSize: '0.9rem', color: 'var(--paper-muted)' }}>
                  আমাদের পূজা কার্যালয় থেকে শীঘ্রই আপনার সাথে {volunteerPhone} নম্বরে যোগাযোগ করা হবে।
                </p>
              </div>
            ) : (
              <form onSubmit={handleVolunteerSubmit} style={{ display: 'grid', gap: '0.85rem' }}>
                <input
                  type="text"
                  placeholder="আপনার নাম (Your Name)"
                  required
                  value={volunteerName}
                  onChange={(e) => setVolunteerName(e.target.value)}
                  style={{
                    padding: '0.75rem 1rem',
                    background: 'rgba(11, 14, 31, 0.7)',
                    border: '1px solid rgba(201, 162, 75, 0.3)',
                    borderRadius: '8px',
                    color: 'var(--cream)',
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.95rem',
                  }}
                />
                <input
                  type="tel"
                  placeholder="ফোন নম্বর (Mobile Number)"
                  required
                  value={volunteerPhone}
                  onChange={(e) => setVolunteerPhone(e.target.value)}
                  style={{
                    padding: '0.75rem 1rem',
                    background: 'rgba(11, 14, 31, 0.7)',
                    border: '1px solid rgba(201, 162, 75, 0.3)',
                    borderRadius: '8px',
                    color: 'var(--cream)',
                    fontFamily: 'var(--font-ui)',
                    fontSize: '0.95rem',
                  }}
                />
                <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
                  <HeartHandshake size={18} />
                  <span className="font-bn">স্বেচ্ছাসেবক হিসাবে নাম নথিভুক্ত করুন</span>
                </button>
              </form>
            )}
          </div>

          {/* Emergency Helpline & Control Room Info */}
          <div className="glass-card" style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <Shield size={28} color="#ffd98a" />
                <div>
                  <h3 className="font-bn" style={{ fontSize: '1.5rem', color: 'var(--cream)', fontWeight: 600 }}>
                    ২৪ ঘণ্টা মণ্ডপ সহায়তা ও হেল্পলাইন
                  </h3>
                  <span className="font-ui" style={{ fontSize: '0.85rem', color: 'var(--gold-light)' }}>
                    Round-the-Clock Emergency & Medical Desk
                  </span>
                </div>
              </div>

              <div style={{ display: 'grid', gap: '1rem', marginTop: '1.25rem' }}>
                <div style={{ padding: '0.85rem 1rem', background: 'rgba(7, 9, 21, 0.5)', borderRadius: '6px' }}>
                  <span className="font-bn" style={{ fontSize: '0.85rem', color: 'var(--gold-light)' }}>পূজা কন্ট্রোল রুম হেল্পলাইন:</span>
                  <p className="font-ui" style={{ fontSize: '1.1rem', color: 'var(--cream)', fontWeight: 600 }}>
                    {COMMITTEE_METADATA.contactPhone}
                  </p>
                </div>

                <div style={{ padding: '0.85rem 1rem', background: 'rgba(7, 9, 21, 0.5)', borderRadius: '6px' }}>
                  <span className="font-bn" style={{ fontSize: '0.85rem', color: 'var(--gold-light)' }}>সাংস্কৃতিক অনুষ্ঠান ও অংশগ্রহণ:</span>
                  <p className="font-bn" style={{ fontSize: '1.05rem', color: '#ff9d5c', fontWeight: 600 }}>
                    গৌতম দা (মোবাইল: ৯৮৮৩০২৬৮৫৭)
                  </p>
                </div>

                <div style={{ padding: '0.85rem 1rem', background: 'rgba(7, 9, 21, 0.5)', borderRadius: '6px' }}>
                  <span className="font-bn" style={{ fontSize: '0.85rem', color: 'var(--gold-light)' }}>মণ্ডপ ঠিকানা:</span>
                  <p className="font-bn" style={{ fontSize: '0.95rem', color: 'var(--cream)' }}>
                    {COMMITTEE_METADATA.venueBn}
                  </p>
                </div>
              </div>
            </div>

            <p className="font-ui" style={{ fontSize: '0.8rem', color: 'var(--paper-muted)', marginTop: '1.25rem' }}>
              রেজিস্ট্রেশন নং: {COMMITTEE_METADATA.registeredRegNo}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
