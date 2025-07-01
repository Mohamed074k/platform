import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';
import academicYear1Img from '../images/academic-year1.jpg';
import academicYear2Img from '../images/academic-year2.jpg';
import academicYear3Img from '../images/academic-year3.jpg';
import suggestedCourses1Img from '../images/suggested-courses1.jpg';
import suggestedCourses2Img from '../images/suggested-courses2.jpg';
import suggestedCourses3Img from '../images/suggested-courses3.jpg';

const navLinks = [
  { href: '#home', label: 'الرئيسية' },
  { href: '#courses', label: 'الكورسات' },
  { href: '#students', label: 'الطلاب' },
  { href: '#exams', label: 'الاختبارات' },
  { href: '#subscriptions', label: 'الاشتراكات' },
];

const coursePages = [
  { id: 'first', label: 'الصف الاول الثانوي' },
  { id: 'second', label: 'الصف الثاني' },
  { id: 'third', label: 'الصف الثالث' },
];

const courseCategories = [
  { id: 'annual', label: 'الكورس السنوي' },
  { id: 'weekly', label: 'المحاضرات الاسبوعيه' },
  { id: 'seasonal', label: 'كورسات الفصول' },
];

const mockCourses = [
  {
    id: 1,
    image: academicYear1Img,
    name: 'كورس الرياضيات السنوي',
    description: 'شرح شامل لمنهج الرياضيات للصف الأول الثانوي.',
    price: '500 جنيه',
    academicYear: 'first',
    category: 'annual',
    descriptionItems: [
      "شرح مفصل لجميع الدروس مع أمثلة عملية",
      "أكثر من 320 فيديو تعليمي عالي الجودة",
      "96 امتحان تفاعلي مع التصحيح التلقائي",
      "45 واجب منزلي لتعزيز الفهم",
      "128 ملف PDF للتحميل والمراجعة",
      "شهادة إتمام معتمدة",
      "دعم فني على مدار الساعة",
      "مجموعة واتساب للطلاب للتفاعل مع المعلم"
    ]
  },
  {
    id: 2,
    image: academicYear2Img,
    name: 'محاضرات الفيزياء الأسبوعية',
    description: 'محاضرات أسبوعية لتقوية الطلاب في الفيزياء.',
    price: '200 جنيه',
    academicYear: 'first',
    category: 'weekly',
    descriptionItems: [
      "شرح مفصل لجميع الدروس مع أمثلة عملية",
      "أكثر من 180 فيديو تعليمي عالي الجودة",
      "60 امتحان تفاعلي مع التصحيح التلقائي",
      "30 واجب منزلي لتعزيز الفهم",
      "80 ملف PDF للتحميل والمراجعة",
      "شهادة إتمام معتمدة",
      "دعم فني على مدار الساعة",
      "مجموعة واتساب للطلاب للتفاعل مع المعلم"
    ]
  },
  {
    id: 3,
    image: academicYear3Img,
    name: 'كورس الكيمياء الفصلي',
    description: 'كورسات مكثفة لكل فصل دراسي في الكيمياء.',
    price: '300 جنيه',
    academicYear: 'second',
    category: 'seasonal',
    descriptionItems: [
      "شرح مفصل لجميع الدروس مع أمثلة عملية",
      "أكثر من 250 فيديو تعليمي عالي الجودة",
      "75 امتحان تفاعلي مع التصحيح التلقائي",
      "40 واجب منزلي لتعزيز الفهم",
      "100 ملف PDF للتحميل والمراجعة",
      "شهادة إتمام معتمدة",
      "دعم فني على مدار الساعة",
      "مجموعة واتساب للطلاب للتفاعل مع المعلم"
    ]
  },
  {
    id: 4,
    image: suggestedCourses1Img,
    name: 'كورس اللغة الإنجليزية السنوي',
    description: 'تغطية شاملة لمنهج اللغة الإنجليزية.',
    price: '450 جنيه',
    academicYear: 'second',
    category: 'annual',
    descriptionItems: [
      "شرح مفصل لجميع الدروس مع أمثلة عملية",
      "أكثر من 280 فيديو تعليمي عالي الجودة",
      "85 امتحان تفاعلي مع التصحيح التلقائي",
      "50 واجب منزلي لتعزيز الفهم",
      "120 ملف PDF للتحميل والمراجعة",
      "شهادة إتمام معتمدة",
      "دعم فني على مدار الساعة",
      "مجموعة واتساب للطلاب للتفاعل مع المعلم"
    ]
  },
  {
    id: 5,
    image: suggestedCourses2Img,
    name: 'محاضرات الأحياء الأسبوعية',
    description: 'محاضرات أسبوعية في الأحياء.',
    price: '220 جنيه',
    academicYear: 'third',
    category: 'weekly',
    descriptionItems: [
      "شرح مفصل لجميع الدروس مع أمثلة عملية",
      "أكثر من 200 فيديو تعليمي عالي الجودة",
      "70 امتحان تفاعلي مع التصحيح التلقائي",
      "35 واجب منزلي لتعزيز الفهم",
      "90 ملف PDF للتحميل والمراجعة",
      "شهادة إتمام معتمدة",
      "دعم فني على مدار الساعة",
      "مجموعة واتساب للطلاب للتفاعل مع المعلم"
    ]
  },
  {
    id: 6,
    image: suggestedCourses3Img,
    name: 'كورس الجغرافيا الفصلي',
    description: 'كورسات جغرافيا لكل فصل دراسي.',
    price: '250 جنيه',
    academicYear: 'third',
    category: 'seasonal',
    descriptionItems: [
      "شرح مفصل لجميع الدروس مع أمثلة عملية",
      "أكثر من 150 فيديو تعليمي عالي الجودة",
      "50 امتحان تفاعلي مع التصحيح التلقائي",
      "25 واجب منزلي لتعزيز الفهم",
      "70 ملف PDF للتحميل والمراجعة",
      "شهادة إتمام معتمدة",
      "دعم فني على مدار الساعة",
      "مجموعة واتساب للطلاب للتفاعل مع المعلم"
    ]
  },
];

const mockStudents = [
  { id: 1, name: 'أحمد علي', email: 'ahmed.ali@email.com', phone: '01012345678' },
  { id: 2, name: 'سارة محمد', email: 'sara.mohamed@email.com', phone: '01098765432' },
  { id: 3, name: 'محمود حسن', email: 'mahmoud.hassan@email.com', phone: '01123456789' },
  { id: 4, name: 'منى إبراهيم', email: 'mona.ibrahim@email.com', phone: '01234567890' },
  { id: 5, name: 'يوسف خالد', email: 'youssef.khaled@email.com', phone: '01011223344' },
];

const getFirstHref = (links) => {
  for (const link of links) {
    if (link.href) return link.href;
  }
  return '';
};

const CoursesPage = () => {
  const [activePage, setActivePage] = useState('first');
  const [activeCategory, setActiveCategory] = useState('annual');
  const [showCourses, setShowCourses] = useState(false);
  const [courses, setCourses] = useState([...mockCourses]);
  const [editCourseId, setEditCourseId] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editForm, setEditForm] = useState({ 
    name: '', 
    description: '', 
    price: '', 
    image: '',
    descriptionItems: []
  });
  const [addForm, setAddForm] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    descriptionItems: [''],
    academicYear: 'first',
    category: 'annual'
  });

  const handleDelete = (id) => {
    setCourses((prev) => prev.filter((course) => course.id !== id));
  };

  const handleEdit = (course) => {
    setEditCourseId(course.id);
    setEditForm({
      name: course.name,
      description: course.description,
      price: course.price,
      image: course.image,
      descriptionItems: course.descriptionItems || []
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddDescriptionItem = () => {
    setEditForm((prev) => ({
      ...prev,
      descriptionItems: [...prev.descriptionItems, '']
    }));
  };

  const handleRemoveDescriptionItem = (index) => {
    setEditForm((prev) => ({
      ...prev,
      descriptionItems: prev.descriptionItems.filter((_, i) => i !== index)
    }));
  };

  const handleDescriptionItemChange = (index, value) => {
    setEditForm((prev) => ({
      ...prev,
      descriptionItems: prev.descriptionItems.map((item, i) => 
        i === index ? value : item
      )
    }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setCourses((prev) =>
      prev.map((course) =>
        course.id === editCourseId ? { ...course, ...editForm } : course
      )
    );
    setEditCourseId(null);
  };

  const handleEditCancel = () => {
    setEditCourseId(null);
  };

  const handleAddCourse = () => {
    setShowAddModal(true);
    setAddForm({
      name: '',
      description: '',
      price: '',
      image: '',
      descriptionItems: [''],
      academicYear: activePage,
      category: activeCategory
    });
  };

  const handleAddFormChange = (e) => {
    const { name, value } = e.target;
    setAddForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddNewDescriptionItem = () => {
    setAddForm((prev) => ({
      ...prev,
      descriptionItems: [...prev.descriptionItems, '']
    }));
  };

  const handleRemoveAddDescriptionItem = (index) => {
    setAddForm((prev) => ({
      ...prev,
      descriptionItems: prev.descriptionItems.filter((_, i) => i !== index)
    }));
  };

  const handleAddNewDescriptionItemChange = (index, value) => {
    setAddForm((prev) => ({
      ...prev,
      descriptionItems: prev.descriptionItems.map((item, i) => 
        i === index ? value : item
      )
    }));
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const newCourse = {
      id: Date.now(), // Simple ID generation
      ...addForm,
      descriptionItems: addForm.descriptionItems.filter(item => item.trim() !== '')
    };
    
    setCourses((prev) => [...prev, newCourse]);
    setShowAddModal(false);
  };

  const handleAddCancel = () => {
    setShowAddModal(false);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (editCourseId || showAddModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [editCourseId, showAddModal]);

  return (
    <div className="courses-page">
      <div className="courses-pagination">
        {coursePages.map((page) => (
          <button
            key={page.id}
            className={`courses-pagination-btn${activePage === page.id ? ' active' : ''}`}
            onClick={() => {
              setActivePage(page.id);
              setActiveCategory('annual');
              setShowCourses(false);
            }}
          >
            {page.label}
          </button>
        ))}
      </div>
      <div className="display-courses-section">
        <button
          className="display-courses-btn"
          onClick={() => setShowCourses(true)}
        >
          عرض الكورسات
        </button>
      </div>
      {showCourses && (
        <div className="courses-categories">
          <div className="categories-container">
            <div className="categories-row">
              {courseCategories.map((cat) => (
                <button
                  key={cat.id}
                  className={`courses-category-btn${activeCategory === cat.id ? ' active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <button
              className="add-course-btn"
              onClick={handleAddCourse}
            >
              <span role="img" aria-label="إضافة">➕</span> إضافة كورس
            </button>
          </div>
        </div>
      )}
      {showCourses && (
        <div className="courses-grid">
          {(() => {
            const filteredCourses = courses.filter(course => 
              (!course.academicYear || course.academicYear === activePage) &&
              (!course.category || course.category === activeCategory)
            );
            
            if (filteredCourses.length === 0) {
              return (
                <div className="no-courses-message">
                  <p>لم يتم اضافه اي كورسات بعد</p>
                </div>
              );
            }
            
            return filteredCourses.slice(0, 6).map((course) => (
              <div className="course-card" key={course.id}>
                <img src={course.image} alt={course.name} className="course-card-img" />
                <div className="course-card-body">
                  <h3 className="course-card-title">{course.name}</h3>
                  <p className="course-card-desc">{course.description}</p>
                  <div className="course-card-price">{course.price}</div>
                  <div className="course-card-description-items">
                    <h4>مميزات الكورس:</h4>
                    <ul>
                      {course.descriptionItems.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="course-card-actions">
                    <button className="edit-btn" onClick={() => handleEdit(course)}>
                      <span role="img" aria-label="تعديل">✏️</span> تعديل
                    </button>
                    <button className="delete-btn" onClick={() => handleDelete(course.id)}>
                      <span role="img" aria-label="حذف">🗑️</span> حذف
                    </button>
                  </div>
                </div>
              </div>
            ));
          })()}
        </div>
      )}
      {editCourseId && (
        <>
          <div className="modal-overlay" onClick={handleEditCancel}></div>
          <div className="edit-course-modal">
            <form className="edit-course-form" onSubmit={handleEditSubmit} onClick={e => e.stopPropagation()}>
              <div className="form-group">
                <label>اسم الكورس</label>
                <input
                  type="text"
                  name="name"
                  value={editForm.name}
                  onChange={handleEditChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>الوصف</label>
                <textarea
                  name="description"
                  value={editForm.description}
                  onChange={handleEditChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>السعر</label>
                <input
                  type="text"
                  name="price"
                  value={editForm.price}
                  onChange={handleEditChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>رابط الصورة</label>
                <input
                  type="text"
                  name="image"
                  value={editForm.image}
                  onChange={handleEditChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>مميزات الكورس</label>
                <div className="description-items-container">
                  {editForm.descriptionItems.map((item, index) => (
                    <div key={index} className="description-item-input">
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => handleDescriptionItemChange(index, e.target.value)}
                        placeholder="أدخل ميزة الكورس"
                      />
                      <button
                        type="button"
                        className="remove-item-btn"
                        onClick={() => handleRemoveDescriptionItem(index)}
                      >
                        حذف
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="add-item-btn"
                    onClick={handleAddDescriptionItem}
                  >
                    إضافة ميزة جديدة
                  </button>
                </div>
              </div>
              <div className="form-actions">
                <button type="submit" className="edit-btn">حفظ</button>
                <button type="button" className="delete-btn" onClick={handleEditCancel}>إلغاء</button>
              </div>
            </form>
          </div>
        </>
      )}
      {showAddModal && (
        <>
          <div className="modal-overlay" onClick={handleAddCancel}></div>
          <div className="edit-course-modal">
            <form className="edit-course-form" onSubmit={handleAddSubmit} onClick={e => e.stopPropagation()}>
              <h3 style={{ textAlign: 'center', marginBottom: '1rem', color: '#1565c0' }}>إضافة كورس جديد</h3>
              <div className="form-group">
                <label>اسم الكورس</label>
                <input
                  type="text"
                  name="name"
                  value={addForm.name}
                  onChange={handleAddFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>الوصف</label>
                <textarea
                  name="description"
                  value={addForm.description}
                  onChange={handleAddFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>السعر</label>
                <input
                  type="text"
                  name="price"
                  value={addForm.price}
                  onChange={handleAddFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>رابط الصورة</label>
                <input
                  type="text"
                  name="image"
                  value={addForm.image}
                  onChange={handleAddFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>السنة الدراسية</label>
                <select
                  name="academicYear"
                  value={addForm.academicYear}
                  onChange={handleAddFormChange}
                  required
                >
                  {coursePages.map((page) => (
                    <option key={page.id} value={page.id}>
                      {page.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>نوع الكورس</label>
                <select
                  name="category"
                  value={addForm.category}
                  onChange={handleAddFormChange}
                  required
                >
                  {courseCategories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>مميزات الكورس</label>
                <div className="description-items-container">
                  {addForm.descriptionItems.map((item, index) => (
                    <div key={index} className="description-item-input">
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => handleAddNewDescriptionItemChange(index, e.target.value)}
                        placeholder="أدخل ميزة الكورس"
                      />
                      <button
                        type="button"
                        className="remove-item-btn"
                        onClick={() => handleRemoveAddDescriptionItem(index)}
                      >
                        حذف
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="add-item-btn"
                    onClick={handleAddNewDescriptionItem}
                  >
                    إضافة ميزة جديدة
                  </button>
                </div>
              </div>
              <div className="form-actions">
                <button type="submit" className="edit-btn">إضافة الكورس</button>
                <button type="button" className="delete-btn" onClick={handleAddCancel}>إلغاء</button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

const StudentsPage = () => (
  <div className="students-page">
    <h2>قائمة الطلاب</h2>
    <div className="students-table-wrapper">
      <table className="students-table">
        <thead>
          <tr>
            <th>الرقم</th>
            <th>الاسم</th>
            <th>البريد الإلكتروني</th>
            <th>رقم الهاتف</th>
            <th>إجراءات</th>
          </tr>
        </thead>
        <tbody>
          {mockStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>
                <button className="visit-profile-btn">زيارة الملف</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(getFirstHref(navLinks));
  const { isDarkMode } = useTheme();

  const handleSidebarToggle = () => setSidebarOpen((open) => !open);
  const handleSidebarClose = () => setSidebarOpen(false);
  const handleLinkClick = (href) => {
    setActiveLink(href);
    setSidebarOpen(false);
  };

  return (
    <div className={`dashboard-container${isDarkMode ? ' dark' : ''}`} dir="rtl">
      <nav className={`dashboard-navbar${isDarkMode ? ' dark' : ''}`} dir="rtl">
        <button className="menu-toggle" onClick={handleSidebarToggle} aria-label="فتح القائمة">
          <span className="menu-icon">&#9776;</span>
        </button>
        <ul className="dashboard-nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={activeLink === link.href ? 'active' : ''}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </nav>
      {/* Sidebar for small screens */}
      <div className={`dashboard-sidebar${sidebarOpen ? ' open' : ''}${isDarkMode ? ' dark' : ''}`} dir="rtl">
        <button className="sidebar-close" onClick={handleSidebarClose} aria-label="إغلاق القائمة">&times;</button>
        <ul className="sidebar-nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={activeLink === link.href ? 'active' : ''}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Overlay when sidebar is open */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={handleSidebarClose}></div>}
      <div className={`dashboard-content${isDarkMode ? ' dark' : ''}`}>
        {activeLink === '#courses' ? (
          <CoursesPage />
        ) : activeLink === '#students' ? (
          <StudentsPage />
        ) : (
          <>
            <h1>لوحة التحكم</h1>
            <p>مرحبًا بك في لوحة التحكم الخاصة بك! اختر قسمًا من شريط التنقل أعلاه.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard; 