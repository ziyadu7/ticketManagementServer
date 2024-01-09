# Ticket Management System for College Students

This repository contains a ticket management system designed specifically for college students to streamline issue reporting and resolution.

## Features

### Admin Panel

- **Admin Registration and Approval**
  - Upon user registration, admin approval is required to grant access.
- **Super Admin Privileges**
  - A built-in super admin has the authority to add other admin accounts.
- **Ticket Assignment**
  - Admins can manage tickets assigned specifically to them.
- **Subject and Priority Management**
  - Capability to add subjects for tickets with different priority levels.

### Student Interface

- **Ticket Submission**
  - Signed-in students can raise tickets to report issues or seek assistance.
- **Commenting System**
  - Students can add comments to each ticket, facilitating communication and updates on issues.

## Usage

### Admin Actions

1. **Registration and Approval**
   - Admins:
     - Super admin will add admins with name and password.
     - Admins can join with the name and password that given by super admin.

2. **Ticket Management**
   - View and manage tickets assigned specifically to each admin account.
   - Add subjects for the tickets along with assigned priorities.

3. **Super Admin Privileges**
   - Can add other admins.

### Student Actions

1. **Ticket Submission**
   - Sign in to submit tickets regarding any issues or concerns.
   - Provide necessary details and subject, assigning priority if applicable.

2. **Commenting System**
   - Engage in ticket discussions by adding comments or updates to existing tickets.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm start

```

## Technologies Used

- PostgreSQL, Node.js, Express.js, Joi for validation, jwt for authentication, React.js, Redux
