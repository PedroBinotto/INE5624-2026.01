import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb.jsx';
import { exhibitions } from './exhibitions-data.js';

const EMPTY = {
  date: '',
  participants: '',
  repName: '',
  repSurname: '',
  repEmail: '',
  instName: '',
  instEmail: '',
  instPhone: '',
  exhibition: '',
  agree: false,
};

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
const isPhone = (v) => /^[+0-9][0-9\s()/.-]{4,}$/.test(v.trim());

/** Returns a map of field -> error message (only for invalid fields). */
function validate(f) {
  const e = {};
  if (!f.date) e.date = 'Please choose a date.';
  if (!f.participants) e.participants = 'Please enter the number of participants.';
  else if (Number(f.participants) < 1) e.participants = 'Must be at least 1.';
  if (!f.repName.trim()) e.repName = 'Please enter a name.';
  if (!f.repSurname.trim()) e.repSurname = 'Please enter a surname.';
  if (!f.repEmail.trim()) e.repEmail = 'Please enter an e-mail address.';
  else if (!isEmail(f.repEmail)) e.repEmail = 'Please enter a valid e-mail address.';
  if (f.instEmail && !isEmail(f.instEmail)) e.instEmail = 'Please enter a valid e-mail address.';
  if (f.instPhone && !isPhone(f.instPhone)) e.instPhone = 'Please enter a valid phone number.';
  if (!f.agree) e.agree = 'You must accept the terms to continue.';
  return e;
}

/** Group registration form (route: "/registration-for-groups"). */
export default function RegistrationForGroups() {
  const [form, setForm] = useState(EMPTY);
  const [touched, setTouched] = useState({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const errors = useMemo(() => validate(form), [form]);
  // Show an error only once a field has been touched or a submit was attempted.
  const errorFor = (name) => ((touched[name] || submitAttempted) ? errors[name] : '') || '';

  const update = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };
  const onBlur = (e) => setTouched((t) => ({ ...t, [e.target.name]: true }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitAttempted(true);
    const keys = Object.keys(errors);
    if (keys.length) {
      const first = document.querySelector(`[name="${keys[0]}"]`);
      if (first) first.focus();
      return;
    }
    console.log('[registration] submitted', form);
    setConfirmed(true);
  };

  const fieldProps = (name) => ({ name, value: form[name], onChange: update, onBlur, error: errorFor(name) });

  return (
    <main id="main-content">
      <section className="ContentArea">
        <div className="Page">
          <Breadcrumb trail={[{ label: 'Home', to: '/' }]} current="Registration for groups" />

          <div className="Form--header">
            <h1 className="Form--title">Registration for groups</h1>
            <div className="Form--description richtext">
              <p>Groups need apply for registration at least 48 hours prior to schedule.</p>
            </div>
          </div>

          <form className="RegForm" onSubmit={onSubmit} noValidate>
            {/* ---------- Left column: panels 1–3 ---------- */}
            <div className="RegForm--col">
              {/* Panel 1 — date + participants */}
              <fieldset className="RegPanel">
                <div className="RegPanel--row">
                  <TextField {...fieldProps('date')} label="Date" type="date" required />
                  <TextField {...fieldProps('participants')} label="Number of participants" type="number" min="1" required />
                </div>
              </fieldset>

              {/* Panel 2 — representative */}
              <fieldset className="RegPanel">
                <legend className="RegPanel--title">Personal data (representative)</legend>
                <TextField {...fieldProps('repName')} label="Name" required />
                <TextField {...fieldProps('repSurname')} label="Surname" required />
                <TextField {...fieldProps('repEmail')} label="E-mail address" type="email" required />
              </fieldset>

              {/* Panel 3 — institutional info */}
              <fieldset className="RegPanel">
                <legend className="RegPanel--title">Institutional info</legend>
                <TextField {...fieldProps('instName')} label="Name" />
                <TextField {...fieldProps('instEmail')} label="E-mail address" type="email" />
                <TextField {...fieldProps('instPhone')} label="Phone number" type="tel" />
              </fieldset>
            </div>

            {/* ---------- Right column: panels 4–5 ---------- */}
            <div className="RegForm--col">
              {/* Panel 4 — exhibition selector */}
              <fieldset className="RegPanel">
                <legend className="RegPanel--title">Guided visitation</legend>
                <div className="FormField">
                  <label className="FormLabel" htmlFor="exhibition">Exhibition</label>
                  <select className="Select" id="exhibition" name="exhibition" value={form.exhibition} onChange={update}>
                    <option value="">No guided visit</option>
                    {exhibitions.map((ex) => (
                      <option key={ex.slug} value={ex.title}>{ex.title}</option>
                    ))}
                  </select>
                </div>
              </fieldset>

              {/* Panel 5 — recap + terms + confirm */}
              <div className="RegPanel">
                <h2 className="RegPanel--title">Summary</h2>
                <Recap form={form} />

                <label className={`RegPanel--terms${errorFor('agree') ? ' RegPanel--terms-error' : ''}`}>
                  <input type="checkbox" name="agree" checked={form.agree} onChange={update} onBlur={onBlur} />
                  <span>I agree with the terms of service and the processing of my data.</span>
                </label>
                {errorFor('agree') && <p className="FormError">{errorFor('agree')}</p>}

                <div className="FormButtons">
                  <button className="Button" type="submit">
                    <span className="Button--inner">Confirm</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>

      {confirmed && <ConfirmDialog email={form.repEmail} />}
    </main>
  );
}

/** Labelled text input with inline validation error. */
function TextField({ name, label, type = 'text', required, error, ...rest }) {
  const errId = `${name}-error`;
  return (
    <div className={`FormField${error ? ' FormField--error' : ''}`}>
      <label className="FormLabel" htmlFor={name}>
        {label}{required && <span className="FormField--required" aria-hidden="true"> *</span>}
      </label>
      <input
        className={`Input${error ? ' Input--error' : ''}`}
        id={name}
        name={name}
        type={type}
        aria-invalid={!!error}
        aria-describedby={error ? errId : undefined}
        {...rest}
      />
      {error && <p className="FormError" id={errId}>{error}</p>}
    </div>
  );
}

/** Live summary of everything entered in the other panels. */
function Recap({ form }) {
  const rep = [form.repName, form.repSurname].filter(Boolean).join(' ');
  const rows = [
    ['Date', form.date],
    ['Participants', form.participants],
    ['Representative', rep],
    ['Representative e-mail', form.repEmail],
    ['Institution', form.instName],
    ['Institution e-mail', form.instEmail],
    ['Institution phone', form.instPhone],
    ['Guided visit', form.exhibition],
  ];
  return (
    <dl className="Recap">
      {rows.map(([label, value]) => (
        <div className="Recap--row" key={label}>
          <dt className="Recap--label">{label}</dt>
          <dd className="Recap--value">{value || <span className="Recap--empty">—</span>}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Confirmation popup shown after a successful submit. */
function ConfirmDialog({ email }) {
  return (
    <div className="Modal--backdrop" role="presentation">
      <div className="Modal" role="dialog" aria-modal="true" aria-labelledby="reg-confirm-title">
        <p className="NotImplemented--tag">Registration received</p>
        <h2 id="reg-confirm-title" className="Modal--title">Thank you!</h2>
        <div className="richtext">
          <p>
            A confirmation e-mail has been sent {email ? <>to <strong>{email}</strong></> : 'to your inbox'}.
            We’ll get back to you shortly to finalise your group visit.
          </p>
          <p className="Modal--hint">(Demo only — no e-mail was actually sent.)</p>
        </div>
        <p className="Modal--actions">
          <Link className="Link size-small" to="/">Back to home</Link>
        </p>
      </div>
    </div>
  );
}
