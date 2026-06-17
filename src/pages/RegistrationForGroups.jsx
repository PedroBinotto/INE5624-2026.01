import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb.jsx';

const EMPTY = {
  groupName: '',
  contact: '',
  email: '',
  phone: '',
  groupType: '',
  size: '',
  date: '',
  time: '',
  guidedTour: false,
  notes: '',
};

/** Group registration form (route: "/registration-for-groups"). */
export default function RegistrationForGroups() {
  const [form, setForm] = useState(EMPTY);
  const [submitted, setSubmitted] = useState(false);

  const update = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Scaffold only — no backend. Echo the payload to the console.
    console.log('[registration] submitted', form);
    setSubmitted(true);
  };

  return (
    <main id="main-content">
      <section className="ContentArea">
        <div className="Page">
          <Breadcrumb trail={[{ label: 'Home', to: '/' }]} current="Registration for groups" />

          <form className="Form" onSubmit={onSubmit} noValidate>
            <div className="Form--header">
              <h1 className="Form--title">Registration for groups</h1>
              <div className="Form--description richtext">
                <p>An online registration is obligatory for groups of 10 or more. Please
                tell us a little about your visit and we’ll confirm by email.</p>
              </div>
            </div>

            {submitted && (
              <div className="FormMessage" role="status">
                <div className="FormMessage--inner">
                  <div className="FormMessage--text">
                    <p className="FormMessage--title">Thank you!</p>
                    <p>Your registration request for <strong>{form.groupName || 'your group'}</strong> has
                    been recorded (demo only — nothing was sent).</p>
                  </div>
                </div>
              </div>
            )}

            <div className="Form--body">
              <Field id="groupName" label="Group / organisation name" required>
                <input className="Input" id="groupName" name="groupName" value={form.groupName} onChange={update} required />
              </Field>

              <Field id="contact" label="Contact person" required>
                <input className="Input" id="contact" name="contact" value={form.contact} onChange={update} required />
              </Field>

              <Field id="email" label="Email" required>
                <input className="Input" id="email" name="email" type="email" value={form.email} onChange={update} required />
              </Field>

              <Field id="phone" label="Phone">
                <input className="Input" id="phone" name="phone" type="tel" value={form.phone} onChange={update} />
              </Field>

              <Field id="groupType" label="Type of group">
                <select className="Select" id="groupType" name="groupType" value={form.groupType} onChange={update}>
                  <option value="">Please choose…</option>
                  <option>School class</option>
                  <option>University / further education</option>
                  <option>Company / association</option>
                  <option>Private group</option>
                  <option>Other</option>
                </select>
              </Field>

              <div className="Form--row">
                <Field id="size" label="Number of people" required>
                  <input className="Input" id="size" name="size" type="number" min="1" value={form.size} onChange={update} required />
                </Field>
                <Field id="date" label="Preferred date" required>
                  <input className="Input" id="date" name="date" type="date" value={form.date} onChange={update} required />
                </Field>
                <Field id="time" label="Preferred time">
                  <input className="Input" id="time" name="time" type="time" value={form.time} onChange={update} />
                </Field>
              </div>

              <div className="FormCheckbox">
                <label className="FormLabel" htmlFor="guidedTour">
                  <input id="guidedTour" name="guidedTour" type="checkbox" checked={form.guidedTour} onChange={update} />
                  {' '}I’m interested in a guided tour
                </label>
              </div>

              <Field id="notes" label="Anything else we should know?">
                <textarea className="Input" id="notes" name="notes" rows="4" value={form.notes} onChange={update} />
              </Field>
            </div>

            <div className="FormButtons">
              <button className="Button" type="submit">
                <span className="Button--inner">Send registration</span>
              </button>
              <button className="Button Button--secondary" type="button" onClick={() => { setForm(EMPTY); setSubmitted(false); }}>
                <span className="Button--inner">Reset</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

function Field({ id, label, required, children }) {
  return (
    <div className="FormField">
      <label className="FormLabel" htmlFor={id}>
        {label}{required && <span className="FormField--required" aria-hidden="true"> *</span>}
      </label>
      {children}
    </div>
  );
}
