"""
RECRUEDG - Modèles SQLAlchemy pour FastAPI
==========================================
Structure complète de la base de données.
À utiliser avec Alembic pour les migrations.
"""

import uuid
from datetime import datetime, date
from enum import Enum as PyEnum

from sqlalchemy import (
    Column, String, Text, Boolean, Integer, Float,
    DateTime, Date, ForeignKey, Enum, UniqueConstraint, Index
)
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import DeclarativeBase, relationship
from sqlalchemy.sql import func


# ─────────────────────────────────────────────
# Base
# ─────────────────────────────────────────────

class Base(DeclarativeBase):
    pass


# ─────────────────────────────────────────────
# Enums
# ─────────────────────────────────────────────

class RoleEnum(str, PyEnum):
    ADMIN = "admin"
    CANDIDAT = "candidat"
    FOURNISSEUR = "fournisseur"


class StatutOffre(str, PyEnum):
    BROUILLON = "brouillon"
    PUBLIEE = "publiee"
    CLOTUREE = "cloturee"
    ARCHIVEE = "archivee"


class TypeContrat(str, PyEnum):
    CDI = "cdi"
    CDD = "cdd"
    STAGE = "stage"
    INTERIM = "interim"
    CONSULTANT = "consultant"


class StatutCandidature(str, PyEnum):
    RECUE = "recue"
    EN_REVISION = "en_revision"
    ENTRETIEN = "entretien"
    ACCEPTEE = "acceptee"
    REFUSEE = "refusee"


class StatutFournisseur(str, PyEnum):
    EN_ATTENTE = "en_attente"
    VALIDE = "valide"
    REJETE = "rejete"
    SUSPENDU = "suspendu"


class StatutAppelOffre(str, PyEnum):
    OUVERT = "ouvert"
    FERME = "ferme"
    EN_EVALUATION = "en_evaluation"
    ATTRIBUE = "attribue"
    ANNULE = "annule"


class StatutSoumission(str, PyEnum):
    SOUMISE = "soumise"
    EN_EVALUATION = "en_evaluation"
    ACCEPTEE = "acceptee"
    REJETEE = "rejetee"


class StatutContrat(str, PyEnum):
    EN_ATTENTE = "en_attente"
    ACTIF = "actif"
    TERMINE = "termine"
    RESILIE = "resilie"


class TypeNotification(str, PyEnum):
    CANDIDATURE = "candidature"
    OFFRE = "offre"
    APPEL_OFFRE = "appel_offre"
    CONTRAT = "contrat"
    SYSTEME = "systeme"


class CategorieDocument(str, PyEnum):
    LEGAL = "legal"
    FISCAL = "fiscal"
    COMMERCIAL = "commercial"
    QUALITE = "qualite"
    IDENTITE = "identite"
    AUTRE = "autre"


# ─────────────────────────────────────────────
# Authentification & Utilisateurs
# ─────────────────────────────────────────────

class User(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email = Column(String(255), unique=True, nullable=False, index=True)
    hashed_password = Column(String(255), nullable=False)
    nom = Column(String(100), nullable=False)
    prenom = Column(String(100), nullable=False)
    telephone = Column(String(20))
    role = Column(Enum(RoleEnum), nullable=False, index=True)
    is_active = Column(Boolean, default=True)
    email_verified = Column(Boolean, default=False)
    avatar_url = Column(String(500))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    # Relations
    profil_candidat = relationship("ProfilCandidat", back_populates="user", uselist=False, cascade="all, delete-orphan")
    profil_fournisseur = relationship("ProfilFournisseur", back_populates="user", uselist=False, cascade="all, delete-orphan")
    candidatures = relationship("Candidature", back_populates="candidat", cascade="all, delete-orphan")
    candidatures_spontanees = relationship("CandidatureSpontanee", back_populates="candidat", cascade="all, delete-orphan")
    notifications = relationship("Notification", back_populates="user", cascade="all, delete-orphan")


# ─────────────────────────────────────────────
# Profils
# ─────────────────────────────────────────────

class ProfilCandidat(Base):
    __tablename__ = "profils_candidats"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"), unique=True, nullable=False)
    date_naissance = Column(Date)
    ville = Column(String(100))
    adresse = Column(String(255))
    niveau_etude = Column(String(100))
    domaine_etude = Column(String(200))
    experience_annees = Column(Integer, default=0)
    poste_actuel = Column(String(200))
    entreprise_actuelle = Column(String(200))
    competences = Column(Text)  # JSON stringifié ou texte libre
    langues = Column(Text)
    cv_url = Column(String(500))
    lettre_motivation_url = Column(String(500))
    linkedin_url = Column(String(500))
    disponibilite = Column(String(100))
    pretention_salariale = Column(String(100))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    user = relationship("User", back_populates="profil_candidat")


class ProfilFournisseur(Base):
    __tablename__ = "profils_fournisseurs"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"), unique=True, nullable=False)
    raison_sociale = Column(String(255), nullable=False)
    nif = Column(String(50), unique=True)
    rccm = Column(String(50), unique=True)
    secteur_activite = Column(String(200))
    description = Column(Text)
    adresse_siege = Column(String(255))
    ville = Column(String(100))
    pays = Column(String(100), default="Guinée")
    site_web = Column(String(255))
    nombre_employes = Column(Integer)
    chiffre_affaires = Column(String(100))
    annee_creation = Column(Integer)
    statut_validation = Column(Enum(StatutFournisseur), default=StatutFournisseur.EN_ATTENTE, index=True)
    date_validation = Column(DateTime(timezone=True))
    valide_par = Column(UUID(as_uuid=True), ForeignKey("users.id"))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    user = relationship("User", back_populates="profil_fournisseur", foreign_keys=[user_id])
    validateur = relationship("User", foreign_keys=[valide_par])
    soumissions = relationship("Soumission", back_populates="fournisseur", cascade="all, delete-orphan")
    contrats = relationship("Contrat", back_populates="fournisseur", cascade="all, delete-orphan")
    documents = relationship("DocumentFournisseur", back_populates="fournisseur", cascade="all, delete-orphan")


# ─────────────────────────────────────────────
# Recrutement
# ─────────────────────────────────────────────

class Direction(Base):
    __tablename__ = "directions"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    nom = Column(String(200), nullable=False, unique=True)
    slug = Column(String(200), unique=True, index=True)
    description = Column(Text)
    icon = Column(String(50))
    responsable = Column(String(200))
    effectif = Column(Integer)
    missions = Column(Text)  # JSON stringifié
    is_active = Column(Boolean, default=True)
    ordre = Column(Integer, default=0)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    offres = relationship("OffreEmploi", back_populates="direction")


class OffreEmploi(Base):
    __tablename__ = "offres_emploi"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    reference = Column(String(20), unique=True, nullable=False, index=True)
    titre = Column(String(300), nullable=False)
    description = Column(Text, nullable=False)
    direction_id = Column(UUID(as_uuid=True), ForeignKey("directions.id"), nullable=False)
    type_contrat = Column(Enum(TypeContrat), nullable=False)
    lieu = Column(String(100), default="Conakry")
    experience_requise = Column(String(100))
    niveau_etude_requis = Column(String(100))
    competences_requises = Column(Text)
    salaire_min = Column(Float)
    salaire_max = Column(Float)
    avantages = Column(Text)
    nombre_postes = Column(Integer, default=1)
    statut = Column(Enum(StatutOffre), default=StatutOffre.BROUILLON, index=True)
    date_publication = Column(DateTime(timezone=True))
    date_limite = Column(Date, nullable=False)
    created_by = Column(UUID(as_uuid=True), ForeignKey("users.id"))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    direction = relationship("Direction", back_populates="offres")
    auteur = relationship("User", foreign_keys=[created_by])
    candidatures = relationship("Candidature", back_populates="offre", cascade="all, delete-orphan")

    __table_args__ = (
        Index("ix_offres_statut_date", "statut", "date_limite"),
    )


class Candidature(Base):
    __tablename__ = "candidatures"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    offre_id = Column(UUID(as_uuid=True), ForeignKey("offres_emploi.id", ondelete="CASCADE"), nullable=False)
    candidat_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    lettre_motivation = Column(Text)
    cv_url = Column(String(500))
    statut = Column(Enum(StatutCandidature), default=StatutCandidature.RECUE, index=True)
    note_admin = Column(Text)
    score = Column(Integer)  # Note sur 100
    date_entretien = Column(DateTime(timezone=True))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    offre = relationship("OffreEmploi", back_populates="candidatures")
    candidat = relationship("User", back_populates="candidatures")

    __table_args__ = (
        UniqueConstraint("offre_id", "candidat_id", name="uq_candidature_offre_candidat"),
    )


class CandidatureSpontanee(Base):
    __tablename__ = "candidatures_spontanees"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    candidat_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    domaine = Column(String(200), nullable=False)
    motivation = Column(Text, nullable=False)
    cv_url = Column(String(500))
    experience = Column(String(100))
    competences = Column(Text)
    ville = Column(String(100))
    statut = Column(Enum(StatutCandidature), default=StatutCandidature.RECUE, index=True)
    note_admin = Column(Text)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    candidat = relationship("User", back_populates="candidatures_spontanees")


# ─────────────────────────────────────────────
# Fournisseurs & Achats
# ─────────────────────────────────────────────

class AppelOffre(Base):
    __tablename__ = "appels_offres"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    reference = Column(String(30), unique=True, nullable=False, index=True)
    titre = Column(String(300), nullable=False)
    description = Column(Text, nullable=False)
    categorie = Column(String(100))
    budget_estime = Column(String(100))
    lieu_livraison = Column(String(200))
    criteres_evaluation = Column(Text)
    documents_requis = Column(Text)
    statut = Column(Enum(StatutAppelOffre), default=StatutAppelOffre.OUVERT, index=True)
    date_publication = Column(DateTime(timezone=True))
    date_limite = Column(Date, nullable=False)
    date_ouverture_plis = Column(DateTime(timezone=True))
    created_by = Column(UUID(as_uuid=True), ForeignKey("users.id"))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    auteur = relationship("User", foreign_keys=[created_by])
    soumissions = relationship("Soumission", back_populates="appel_offre", cascade="all, delete-orphan")


class Soumission(Base):
    __tablename__ = "soumissions"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    appel_offre_id = Column(UUID(as_uuid=True), ForeignKey("appels_offres.id", ondelete="CASCADE"), nullable=False)
    fournisseur_id = Column(UUID(as_uuid=True), ForeignKey("profils_fournisseurs.id", ondelete="CASCADE"), nullable=False)
    montant_propose = Column(Float, nullable=False)
    delai_livraison = Column(String(100))
    description_technique = Column(Text)
    documents_url = Column(Text)  # JSON: liste d'URLs
    statut = Column(Enum(StatutSoumission), default=StatutSoumission.SOUMISE, index=True)
    note_evaluation = Column(Integer)
    commentaire_evaluateur = Column(Text)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    appel_offre = relationship("AppelOffre", back_populates="soumissions")
    fournisseur = relationship("ProfilFournisseur", back_populates="soumissions")

    __table_args__ = (
        UniqueConstraint("appel_offre_id", "fournisseur_id", name="uq_soumission_ao_fournisseur"),
    )


class Contrat(Base):
    __tablename__ = "contrats"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    reference = Column(String(30), unique=True, nullable=False, index=True)
    titre = Column(String(300), nullable=False)
    fournisseur_id = Column(UUID(as_uuid=True), ForeignKey("profils_fournisseurs.id"), nullable=False)
    appel_offre_id = Column(UUID(as_uuid=True), ForeignKey("appels_offres.id"))
    objet = Column(Text)
    montant = Column(Float, nullable=False)
    devise = Column(String(10), default="GNF")
    date_debut = Column(Date, nullable=False)
    date_fin = Column(Date, nullable=False)
    conditions_livraison = Column(Text)
    penalites_retard = Column(Text)
    statut = Column(Enum(StatutContrat), default=StatutContrat.EN_ATTENTE, index=True)
    progression = Column(Integer, default=0)  # 0-100
    document_url = Column(String(500))
    signe_par = Column(UUID(as_uuid=True), ForeignKey("users.id"))
    date_signature = Column(DateTime(timezone=True))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    fournisseur = relationship("ProfilFournisseur", back_populates="contrats")
    appel_offre = relationship("AppelOffre")
    signataire = relationship("User", foreign_keys=[signe_par])


class DocumentFournisseur(Base):
    __tablename__ = "documents_fournisseur"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    fournisseur_id = Column(UUID(as_uuid=True), ForeignKey("profils_fournisseurs.id", ondelete="CASCADE"), nullable=False)
    nom = Column(String(255), nullable=False)
    categorie = Column(Enum(CategorieDocument), default=CategorieDocument.AUTRE)
    description = Column(Text)
    fichier_url = Column(String(500), nullable=False)
    taille = Column(String(20))
    type_fichier = Column(String(10))  # pdf, doc, image, etc.
    is_verified = Column(Boolean, default=False)
    verified_by = Column(UUID(as_uuid=True), ForeignKey("users.id"))
    date_expiration = Column(Date)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())

    fournisseur = relationship("ProfilFournisseur", back_populates="documents")
    verificateur = relationship("User", foreign_keys=[verified_by])


# ─────────────────────────────────────────────
# Notifications
# ─────────────────────────────────────────────

class Notification(Base):
    __tablename__ = "notifications"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="CASCADE"), nullable=False, index=True)
    type = Column(Enum(TypeNotification), nullable=False)
    titre = Column(String(255), nullable=False)
    message = Column(Text, nullable=False)
    lien = Column(String(500))
    is_read = Column(Boolean, default=False, index=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

    user = relationship("User", back_populates="notifications")

    __table_args__ = (
        Index("ix_notifications_user_read", "user_id", "is_read"),
    )


# ─────────────────────────────────────────────
# Pydantic Schemas (pour FastAPI)
# ─────────────────────────────────────────────
"""
Les schemas Pydantic doivent être définis dans un fichier séparé (schemas.py).
Exemple de structure recommandée :

app/
├── main.py
├── config.py
├── database.py          # Engine, SessionLocal, get_db()
├── models/
│   ├── __init__.py
│   └── models.py        # CE FICHIER
├── schemas/
│   ├── __init__.py
│   ├── user.py          # UserCreate, UserRead, UserUpdate
│   ├── offre.py         # OffreCreate, OffreRead, OffreUpdate
│   ├── candidature.py
│   ├── fournisseur.py
│   ├── appel_offre.py
│   └── contrat.py
├── api/
│   ├── __init__.py
│   ├── deps.py          # Dépendances (auth, pagination)
│   ├── auth.py
│   ├── users.py
│   ├── offres.py
│   ├── candidatures.py
│   ├── fournisseurs.py
│   ├── appels_offres.py
│   └── contrats.py
├── services/
│   ├── auth_service.py  # JWT, hashing
│   ├── email_service.py
│   └── file_service.py
└── alembic/
    └── versions/
"""
