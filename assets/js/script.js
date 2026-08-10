document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
  const mobileNavToggle = document.getElementById('mobile-nav-toggle');
  const navLinksContainer = document.getElementById('nav-links');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileNavToggle && navLinksContainer) {
    mobileNavToggle.addEventListener('click', () => {
      navLinksContainer.classList.toggle('open');
      const icon = mobileNavToggle.querySelector('i');
      if (icon) {
        if (navLinksContainer.classList.contains('open')) {
          icon.className = 'ti-close';
        } else {
          icon.className = 'ti-menu';
        }
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinksContainer.classList.remove('open');
        const icon = mobileNavToggle.querySelector('i');
        if (icon) icon.className = 'ti-menu';
      });
    });
  }

  // 2. Active Section ScrollSpy
  const sections = document.querySelectorAll('section[id], header[id]');
  window.addEventListener('scroll', () => {
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  });

  // 3. Live Interactive Developer Terminal Widget
  const terminalInput = document.getElementById('terminal-input');
  const terminalOutput = document.getElementById('terminal-output');
  const terminalChips = document.querySelectorAll('.terminal-chip');

  const commands = {
    help: `Available Commands:
  • skills       - View core backend technical stack
  • projects     - Inspect featured enterprise systems
  • architecture - View system architecture layers
  • experience   - View Innefu Labs career details
  • contact      - Get email and profile links
  • siliconsweat - Access personal lifestyle page
  • clear        - Clear terminal screen`,
    skills: `JAVA BACKEND STACK:
  ├── Core: Java (8/11/17), Spring Boot, Spring MVC, REST APIs
  ├── Database: SQL Server, PostgreSQL, MySQL, MongoDB
  ├── Frontend: React, React Native, JavaScript, TypeScript
  └── Infra: Docker, Nginx, JWT, WebSockets, Git`,
    projects: `FEATURED ENTERPRISE SYSTEMS:
  1. Enterprise Inventory Management System (IMS) [Java, Spring Boot, SQL Server, React]
  2. File & Task Movement Tracking System [Java, Spring Boot, SQL Server, React]
  3. Cyber Hygiene Intranet Chatbot [React, FastAPI, Nginx]
  4. Scentiment IoT Dispenser & App [React Native, Node.js, Express, BLE/Wi-Fi]`,
    architecture: `SYSTEM ARCHITECTURE LAYERS:
  Frontend (React) ──> REST Controllers (Spring) ──> Service Layer (Business Rules) ──> Repository (JPA) ──> SQL Server`,
    experience: `WORK EXPERIENCE:
  Assistant Programmer @ Innefu Labs
  Building Enterprise IMS platforms, asset lifecycles, license management, stored procedures, and Spring Boot REST services.`,
    contact: `CONTACT INFORMATION:
  Email: 1bhrtsnegi@gmail.com
  GitHub: https://github.com/bhrtsnegi
  LinkedIn: https://linkedin.com/in/bhrtsnegi
  Instagram: https://instagram.com/siliconsweat`,
    siliconsweat: `SILICONSWEAT — Where Code Meets Sweat!
  Navigating to personal experience: personal.html`
  };

  function executeCommand(cmd) {
    const cleanCmd = cmd.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === 'clear') {
      if (terminalOutput) terminalOutput.textContent = '';
      return;
    }

    if (cleanCmd === 'siliconsweat') {
      window.location.href = 'personal.html';
      return;
    }

    const outputText = commands[cleanCmd] || `Command not found: "${cleanCmd}". Type "help" for a list of valid commands.`;
    if (terminalOutput) {
      terminalOutput.textContent += `\n$ ${cleanCmd}\n${outputText}\n`;
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
  }

  if (terminalInput) {
    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        executeCommand(terminalInput.value);
        terminalInput.value = '';
      }
    });
  }

  terminalChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.getAttribute('data-cmd');
      if (cmd) executeCommand(cmd);
    });
  });

  // 4. Interactive System Architecture Playground Node Switcher
  const archNodes = document.querySelectorAll('.arch-node');
  const archDetailTitle = document.getElementById('arch-detail-title');
  const archDetailText = document.getElementById('arch-detail-text');
  const archDetailCode = document.getElementById('arch-detail-code');

  const archLayerData = {
    frontend: {
      title: "Frontend UI Layer (React / React Native)",
      text: "Responsive component architectures consuming REST APIs via Axios/Fetch, managing state, handling form validations, and rendering real-time asset dashboards.",
      code: `// React REST Service Integration
const fetchAssets = async (category) => {
  const response = await api.get(\`/api/v1/assets?category=\${category}\`);
  return response.data;
};`
    },
    controller: {
      title: "REST API Layer (Spring Controllers & DTOs)",
      text: "Exposes RESTful endpoints, handles HTTP status code responses, validates RequestBody DTOs, and enforces JWT role-based security.",
      code: `@RestController
@RequestMapping("/api/v1/assets")
public class AssetController {
    @Autowired private AssetService assetService;

    @PostMapping
    public ResponseEntity<AssetResponseDTO> createAsset(@Valid @RequestBody AssetRequestDTO dto) {
        return ResponseEntity.ok(assetService.registerAsset(dto));
    }
}`
    },
    service: {
      title: "Service Layer (Business Logic & Transactions)",
      text: "Encapsulates core business rules, transactional boundaries (@Transactional), error handling, asset assignment constraints, and audit log entries.",
      code: `@Service
@Transactional
public class AssetServiceImpl implements AssetService {
    @Override
    public AssetResponseDTO registerAsset(AssetRequestDTO dto) {
        // Business validation & asset lifecycle tracking logic
        Asset asset = assetRepository.save(AssetMapper.toEntity(dto));
        auditLogger.logAction("ASSET_CREATED", asset.getId());
        return AssetMapper.toDTO(asset);
    }
}`
    },
    repository: {
      title: "Repository Layer (Data Access & JPA)",
      text: "Data Access Objects leveraging Spring Data JPA repositories, custom JPQL queries, and native stored procedure invocations.",
      code: `@Repository
public interface AssetRepository extends JpaRepository<Asset, Long> {
    @Query("SELECT a FROM Asset a WHERE a.status = :status AND a.departmentId = :deptId")
    List<Asset> findActiveAssetsByDepartment(@Param("status") String status, @Param("deptId") Long deptId);
}`
    },
    database: {
      title: "Database Layer (SQL Server Schema & Stored Procedures)",
      text: "Relational database schema containing foreign key relationships, indexed foreign keys, audit timestamps, asset assignment tables, and stored procedures.",
      code: `CREATE TABLE Assets (
    AssetID BIGINT PRIMARY KEY IDENTITY(1,1),
    SerialNumber VARCHAR(100) NOT NULL UNIQUE,
    AssetType VARCHAR(50) NOT NULL,
    Status VARCHAR(30) DEFAULT 'AVAILABLE',
    CreatedAt DATETIME2 DEFAULT GETDATE()
);`
    }
  };

  archNodes.forEach(node => {
    node.addEventListener('click', () => {
      archNodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');

      const layerKey = node.getAttribute('data-layer');
      const data = archLayerData[layerKey];

      if (data && archDetailTitle && archDetailText && archDetailCode) {
        archDetailTitle.textContent = data.title;
        archDetailText.textContent = data.text;
        archDetailCode.textContent = data.code;
      }
    });
  });

  // 5. 3D Tilt Hover Handler for Cards
  const cards3D = document.querySelectorAll('.project-card');
  cards3D.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      card.style.transform = `perspective(1000px) rotateX(${-y / 25}deg) rotateY(${x / 25}deg) translateY(-2px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });

  // 6. Copy-to-Clipboard & Toast
  const copyButtons = document.querySelectorAll('.copy-btn');
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied "${textToCopy}" to clipboard!`);
        }).catch(() => {
          showToast('Failed to copy');
        });
      }
    });
  });

  function showToast(message) {
    if (!toast || !toastMsg) return;
    toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
});